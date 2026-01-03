#!/bin/bash

# This script updates all pages to use the LazyFooter component

# List of page files to update
PAGE_FILES=(
  "src/pages/ApproachPage.tsx"
  "src/pages/CareersPage.tsx"
  "src/pages/CookiePolicyPage.tsx"
  "src/pages/LicensingPage.tsx"
  "src/pages/PrivacyPolicyPage.tsx"
  "src/pages/ProfilePage.tsx"
  "src/pages/TermsOfServicePage.tsx"
)

for file in "${PAGE_FILES[@]}"; do
  echo "Updating $file..."
  
  # Replace the import statement
  sed -i 's/import Footer from "@\/components\/Footer";/import LazyFooter from "@\/components\/LazyFooter";/g' "$file"
  
  # Replace the Footer component usage
  sed -i 's/<Footer \/>/<LazyFooter \/>/g' "$file"
done

echo "All files updated successfully!"
