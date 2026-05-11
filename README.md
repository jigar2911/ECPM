# Earth Care Property Maintenance Website

This is a modern, responsive website built with React, Vite, and Tailwind CSS.

## Getting Started

### 1. Local Development
To run the website on your local machine:
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to the URL shown in the terminal (usually `http://localhost:5173`).

### 2. Deployment (to cPanel/Namecheap)
To put the website live on your hosting:
1. Run the build command:
   ```bash
   npm run build
   ```
2. This will create a folder named `dist`.
3. Upload **everything inside** the `dist` folder to your server's `public_html` directory.
4. **Important**: Make sure the `.htaccess` file (inside `dist/`) is uploaded. If you don't see it, ensure your FTP client/File Manager is showing hidden files.

## Project Structure
- `src/`: Contains the React components and pages.
- `public/`: Static assets and server-side files (like `contact.php` and `.htaccess`).
- `tailwind.config.js`: Styling configuration.

## Features
- **Responsive Navigation**: Mobile-friendly menu.
- **Service Sections**: Interactive cards for all services.
- **Property Manager Page**: Specialized info for referral partners.
- **PHP Contact Form**: Handles submissions and sends emails.
- **Animations**: Powered by Framer Motion.
