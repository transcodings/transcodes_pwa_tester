# PWA Integration Guide 🚀

This guide explains how to integrate Progressive Web App (PWA) functionality into your shopping mall website using the Transcodes Canvas service.

## 📋 Prerequisites

- Basic HTML/CSS/JavaScript knowledge
- A web server to host your files (local or remote)
- Access to Transcodes Canvas platform

## 🔧 Integration Steps

### Step 1: Update Your HTML Head Section

Add the following PWA-related links to your `<head>` section in `index.html`:

```html
<head>
  <!-- Existing head content -->

  <!-- PWA Meta Tags -->
  <meta name="theme-color" content="#000000" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="Shopping Mall" />

  <!-- PWA Manifest -->
  <link
    rel="manifest"
    href="https://transcodes-contents-dev.s3.ca-central-1.amazonaws.com/YOUR_PROJECT_ID/manifest.json"
  />

  <!-- PWA Icons -->
  <link
    rel="apple-touch-icon"
    href="https://transcodes-contents-dev.s3.ca-central-1.amazonaws.com/YOUR_PROJECT_ID/icon-192x192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="https://transcodes-contents-dev.s3.ca-central-1.amazonaws.com/YOUR_PROJECT_ID/icon-192x192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="512x512"
    href="https://transcodes-contents-dev.s3.ca-central-1.amazonaws.com/YOUR_PROJECT_ID/icon-512x512.png"
  />
</head>
```

### Step 2: Configure Service Worker

#### Method 1: Download from Dashboard

1. Go to your Transcodes Canvas project dashboard
2. Navigate to the PWA settings/files section
3. Download the `sw.js` file
4. Place it in your project root directory

#### Method 2: Create Custom Service Worker

Create a `sw.js` file in your project root with the following content:

```javascript
// sw.js
// Import the service worker from Transcodes Canvas CDN
importScripts(
  'https://transcodes-contents-dev.s3.ca-central-1.amazonaws.com/YOUR_PROJECT_ID/serviceworker.js'
);

// Example with actual URL (replace with your own)
importScripts(
  'https://transcodes-contents-dev.s3.ca-central-1.amazonaws.com/01JWW55QK8Z4MFK9S0RG6527C6/serviceworker.js'
);
```

## 🔍 Verification

### Chrome DevTools

1. Open Chrome DevTools (F12)
2. Go to "Application" tab
3. Check "Manifest" section for PWA configuration
4. Verify "Service Workers" are registered

## 🛠️ Troubleshooting

### Common Issues

- **Manifest not loading**: Check if the manifest URL is accessible
- **Service worker not registering**: Check browser console for errors
- **Install prompt not appearing**: Ensure all PWA criteria are met

### Debug Steps

1. Check browser console for errors
2. Verify all URLs are accessible
3. Test on different browsers and devices
4. Use Chrome DevTools Application tab for debugging

---

**Note**: Replace `YOUR_PROJECT_ID` with your actual Transcodes Canvas project ID throughout the implementation.
