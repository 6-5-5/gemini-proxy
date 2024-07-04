# Google Gemini API Proxy

This project offers a proxy server for the Google Gemini API. It provides potential benefits such as improved accessibility and the possibility of bypassing regional restrictions.

## Features

- **Transparent Request Forwarding:** Users can maintain the original Google Gemini API request format, simply replacing the Google domain with the proxy server's address.
- **Enhanced Accessibility:** The proxy server may facilitate access to the Google Gemini API from locations where direct access is limited.

## Getting Started

1. **Deployment:** Deploy the project to a suitable serverless environment of your choice.
2. **Configuration:** If required, update the proxy's target URL to align with your desired Google Gemini API endpoint.
3. **Request Submission:** Structure your API requests according to the standard Google Gemini API format, substituting the Google domain with the address of your proxy server.

   **Example Proxy Request:**

   ```
   https://your-proxy-domain/v1beta/models/gemini-1.5-pro-latest:generateContent?key=YOUR_API_KEY 
   ```

   **Original Google Gemini Request (for Reference):**

   ```
   https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=YOUR_API_KEY
   ```
