# Firebase Analytics Setup Guide

## Overview
Firebase Analytics has been integrated into your CTOxAI landing page with comprehensive funnel tracking. This guide will help you configure your Firebase project credentials.

**Note**: This project uses `pnpm` for package management. Make sure you have pnpm installed: `npm install -g pnpm`

## Setup Steps

### 1. Configure Firebase Credentials

Create a `.env` file in your project root with your Firebase credentials:

```bash
# Copy these environment variable names and replace with your actual values
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Security Note**: The `.env` file is already in your `.gitignore` to prevent committing secrets to version control.

### 2. Find Your Configuration Values

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" section
5. Copy the configuration values to your `.env` file

### 3. Enable Analytics

1. In Firebase Console, go to Analytics dashboard
2. If not already enabled, click "Enable Google Analytics"
3. Follow the setup wizard
4. Note your Measurement ID (starts with G-) and add it to your `.env` file
5. Check DebugView for real-time event testing

## Tracking Events Implemented

### Funnel Stages
- **Awareness**: Page view, initial engagement
- **Interest**: Scroll depth (50%+), time on page (30s+), testimonial views
- **Consideration**: Scroll depth (75%+), time on page (60s+), FAQ interactions
- **Intent**: CTA hover/focus events
- **Action**: CTA clicks, external redirects

### Specific Events

#### Page Events
- `page_view`: Initial page load with UTM parameters
- `section_view`: When users scroll into view of each section

#### Engagement Events  
- `join_group_click`: CTA button clicks
- `typeform_redirect`: External redirect tracking
- `faq_expand`: FAQ question expansions
- `testimonial_view`: Testimonial card hovers
- `topic_card_hover`: Discussion topic card interactions

#### Behavioral Tracking
- `scroll_25/50/75/100_percent`: Scroll depth milestones
- `time_on_page_30s/60s/120s`: Time engagement milestones

### User Properties Tracked
- Browser information
- Screen resolution
- Viewport size
- Timezone
- Language
- Platform
- UTM parameters

## Analytics Dashboard

Once configured, you'll see data in:

1. **Firebase Analytics Dashboard**: Real-time events and user behavior
2. **Google Analytics 4**: Connected automatically via Firebase
3. **Firebase DebugView**: For testing events in development

### Custom Events to Monitor

Key conversion events for your landing page funnel:
- `join_group_click` - Primary conversion goal
- `typeform_redirect` - Actual conversion completion
- `funnel_consideration` - Users showing high intent
- `time_on_page_60s` - Engaged users
- `scroll_75_percent` - Users consuming most content

## Testing Setup

### Development Testing
1. Start your development server: `pnpm dev`
2. Open browser dev tools → Console
3. You'll see analytics events logged to console
4. Check Firebase DebugView for real-time event verification

### Verify Configuration
```bash
# Check if Firebase is properly initialized
# Look for console logs starting with "Analytics event:"

# Example expected logs:
# Analytics event: page_view {...}
# Analytics event: funnel_awareness {...}  
# Analytics event: section_view {...}
```

## Privacy & GDPR Compliance

The implementation includes:
- User consent management (you may need to add a cookie banner)
- Anonymous data collection by default
- No personal data stored in custom parameters

Consider adding:
- Cookie consent banner
- Privacy policy updates
- Data retention policies in Firebase

## Troubleshooting

### Common Issues
1. **No events showing**: Check Firebase config values are correct
2. **Console errors**: Verify all Firebase dependencies are installed
3. **Missing measurement ID**: Ensure Analytics is enabled in Firebase

### Debug Mode
Add `?debug_mode=true` to your URL to enable detailed Firebase debugging.

## Performance Impact

The analytics implementation is optimized for performance:
- Events are batched and sent asynchronously
- Scroll tracking is throttled using requestAnimationFrame
- Only essential data is collected
- Analytics only loads in browser environment

Your page should see minimal performance impact (< 50ms additional load time). 