
# Stage 1: Build the React app
FROM node:23-alpine AS build
WORKDIR /app

# Install git for any git-dependent packages
RUN apk add --no-cache git

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (this layer will be cached if package.json doesn't change)
# Disable husky during Docker build since git is not available
ENV HUSKY=0
RUN npm ci --ignore-scripts --silent || npm install --ignore-scripts --silent

# Copy source code (separate layer for better caching)
COPY . .

# Build the React app (Web3Forms access key is hardcoded in components)
RUN npm run build && \
    # Remove source maps and other development artifacts
    find dist -name "*.map" -delete

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
RUN apk add --no-cache bash dos2unix curl

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Copy built app
COPY --from=build /app/dist /usr/share/nginx/html

# Fix line endings in the entrypoint script
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN dos2unix /app/docker-entrypoint.sh && chmod +x /app/docker-entrypoint.sh

# Create a non-root user to run nginx
# Check if www-data user exists and create if not
RUN if id -u www-data >/dev/null 2>&1; then \
      echo "User www-data already exists"; \
    else \
      addgroup -S -g 1000 www-data || true && \
      adduser -S -D -H -u 1000 -s /sbin/nologin -G www-data www-data || true; \
    fi && \
    chown -R www-data:www-data /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Set environment variables for runtime
ENV PORT=8080
EXPOSE 8080

# Use the entrypoint script to substitute environment variables and start nginx
CMD ["/app/docker-entrypoint.sh"]
