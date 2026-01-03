# Web3Forms Setup Instructions

This guide will help you configure Web3Forms to enable the contact form to send emails to info@jcreliteprotection.co.uk.

## Prerequisites

- A Web3Forms account (free tier available)
- No email server configuration required

## Step 1: Create Web3Forms Account

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form

1. In your Web3Forms dashboard, click **Create New Form**
2. Enter a form name (e.g., "JCR Elite Protection Contact Form")
3. Set the **To Email** field to: `info@jcreliteprotection.co.uk`
4. Configure any additional settings as needed
5. Click **Create Form**

## Step 3: Get Your Access Key

1. After creating the form, you'll see your **Access Key**
2. Copy this access key (it looks like: `abcd1234-5678-90ef-ghij-klmnopqrstuv`)
3. Keep this key secure as it will be used in your environment variables

## Step 4: Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. Replace `your_access_key_here` with your actual Web3Forms access key

## Step 5: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check that the email arrives at info@jcreliteprotection.co.uk

## Troubleshooting

### Common Issues

1. **"Email service is not configured" error**
   - Check that the access key environment variable is set correctly
   - Ensure the `.env` file is in the project root
   - Restart the development server after adding environment variables

2. **Emails not being sent**
   - Verify your Web3Forms access key is correct
   - Check the browser console for error messages
   - Ensure your form is active in the Web3Forms dashboard

3. **Form submission errors**
   - Check your internet connection
   - Verify the Web3Forms service is operational
   - Review the browser network tab for failed requests

### Support

- Web3Forms Documentation: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- Web3Forms Support: [https://web3forms.com/contact](https://web3forms.com/contact)

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- Keep your Web3Forms access key secure
- Web3Forms includes built-in spam protection
- Consider enabling additional security features in your Web3Forms dashboard
