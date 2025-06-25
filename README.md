# CTOxAI Landing Page

Private WhatsApp community for CTOs implementing AI.

## Package Management

This project uses **pnpm** for package management. 

### Setup

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Firebase Analytics

Firebase Analytics is integrated with comprehensive funnel tracking. See `FIREBASE_SETUP.md` for configuration details.

## Environment Variables

Create a `.env` file with your Firebase configuration:

```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Technology Stack

- **React** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Firebase Analytics** - Event tracking
- **Lucide React** - Icons

## Deployment

Deploy to Firebase Hosting:

```bash
pnpm build
firebase deploy
``` 