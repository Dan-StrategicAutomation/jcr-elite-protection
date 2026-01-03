
#!/bin/sh
echo "Starting container with PORT=${PORT}"
envsubst "\${PORT}" < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
echo "Nginx config created, starting server..."
cat /etc/nginx/conf.d/default.conf

# Start Nginx (Cloud Run handles HTTPS termination)
exec nginx -g "daemon off;"
