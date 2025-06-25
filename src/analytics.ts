import { logEvent, setUserProperties } from 'firebase/analytics';
import { analytics } from './firebase';

// Landing page funnel events
export const ANALYTICS_EVENTS = {
  // Page events
  LANDING_PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',
  
  // Engagement events
  HERO_CTA_CLICK: 'hero_cta_click',
  JOIN_GROUP_CLICK: 'join_group_click',
  TYPEFORM_REDIRECT: 'typeform_redirect',
  
  // Section interactions
  TESTIMONIAL_VIEW: 'testimonial_view',
  FAQ_EXPAND: 'faq_expand',
  TOPIC_CARD_HOVER: 'topic_card_hover',
  
  // Scroll tracking
  SCROLL_25: 'scroll_25_percent',
  SCROLL_50: 'scroll_50_percent',
  SCROLL_75: 'scroll_75_percent',
  SCROLL_100: 'scroll_100_percent',
  
  // Time tracking
  TIME_ON_PAGE_30S: 'time_on_page_30s',
  TIME_ON_PAGE_60S: 'time_on_page_60s',
  TIME_ON_PAGE_120S: 'time_on_page_120s',
  
  // Funnel stages
  AWARENESS: 'funnel_awareness',
  INTEREST: 'funnel_interest',
  CONSIDERATION: 'funnel_consideration',
  INTENT: 'funnel_intent',
  ACTION: 'funnel_action'
} as const;

export interface AnalyticsEvent {
  eventName: string;
  parameters?: Record<string, string | number | boolean | null>;
}

// Helper function to safely log events
export const trackEvent = (eventName: string, parameters: Record<string, string | number | boolean | null> = {}) => {
  if (!analytics) {
    console.warn('Analytics not initialized');
    return;
  }

  try {
    // Add common parameters
    const eventParams = {
      ...parameters,
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`
    };

    logEvent(analytics, eventName, eventParams);
    console.log(`Analytics event: ${eventName}`, eventParams);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Set user properties for segmentation
export const setUserData = (properties: Record<string, string | number | boolean | null>) => {
  if (!analytics) return;

  try {
    setUserProperties(analytics, properties);
  } catch (error) {
    console.error('Error setting user properties:', error);
  }
};

// Funnel tracking functions
export const trackFunnelStage = (stage: keyof typeof ANALYTICS_EVENTS, additionalData: Record<string, string | number | boolean | null> = {}) => {
  trackEvent(ANALYTICS_EVENTS[stage], {
    funnel_stage: stage.toLowerCase().replace('funnel_', ''),
    ...additionalData
  });
};

// Page view tracking
export const trackPageView = () => {
  trackEvent(ANALYTICS_EVENTS.LANDING_PAGE_VIEW, {
    page_path: window.location.pathname,
    referrer: document.referrer,
    utm_source: new URLSearchParams(window.location.search).get('utm_source'),
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign')
  });
  
  // Track awareness stage
  trackFunnelStage('AWARENESS', { entry_point: 'landing_page' });
};

// Section view tracking
export const trackSectionView = (sectionName: string) => {
  trackEvent(ANALYTICS_EVENTS.SECTION_VIEW, {
    section_name: sectionName,
    section_position: getSectionPosition(sectionName)
  });
};

// CTA tracking
export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  trackEvent(ANALYTICS_EVENTS.JOIN_GROUP_CLICK, {
    cta_location: ctaLocation,
    cta_text: ctaText,
    click_timestamp: Date.now()
  });
  
  // Track intent/action stages
  trackFunnelStage('INTENT', { cta_location: ctaLocation });
  trackFunnelStage('ACTION', { action_type: 'cta_click', cta_location: ctaLocation });
};

// Typeform redirect tracking
export const trackTypeformRedirect = () => {
  trackEvent(ANALYTICS_EVENTS.TYPEFORM_REDIRECT, {
    destination: 'typeform',
    conversion_point: 'join_group_cta'
  });
  
  trackFunnelStage('ACTION', { action_type: 'external_redirect', destination: 'typeform' });
};

// FAQ interaction tracking
export const trackFAQInteraction = (question: string, index: number) => {
  trackEvent(ANALYTICS_EVENTS.FAQ_EXPAND, {
    question_text: question,
    question_index: index,
    faq_section_position: 'bottom'
  });
  
  trackFunnelStage('CONSIDERATION', { interaction_type: 'faq_expand', question_index: index });
};

// Testimonial view tracking
export const trackTestimonialView = (testimonialAuthor: string, index: number) => {
  trackEvent(ANALYTICS_EVENTS.TESTIMONIAL_VIEW, {
    testimonial_author: testimonialAuthor,
    testimonial_index: index
  });
  
  trackFunnelStage('INTEREST', { content_type: 'testimonial', author: testimonialAuthor });
};

// Scroll tracking
export const trackScrollProgress = (percentage: number) => {
  const eventMap: Record<number, string> = {
    25: ANALYTICS_EVENTS.SCROLL_25,
    50: ANALYTICS_EVENTS.SCROLL_50,
    75: ANALYTICS_EVENTS.SCROLL_75,
    100: ANALYTICS_EVENTS.SCROLL_100
  };

  const eventName = eventMap[percentage];
  if (eventName) {
    trackEvent(eventName, {
      scroll_percentage: percentage,
      page_height: document.documentElement.scrollHeight,
      viewport_height: window.innerHeight
    });

    // Track funnel progression based on scroll
    if (percentage >= 50) {
      trackFunnelStage('INTEREST', { trigger: 'scroll_depth', percentage });
    }
    if (percentage >= 75) {
      trackFunnelStage('CONSIDERATION', { trigger: 'scroll_depth', percentage });
    }
  }
};

// Time on page tracking
export const trackTimeOnPage = (seconds: number) => {
  const eventMap: Record<number, string> = {
    30: ANALYTICS_EVENTS.TIME_ON_PAGE_30S,
    60: ANALYTICS_EVENTS.TIME_ON_PAGE_60S,
    120: ANALYTICS_EVENTS.TIME_ON_PAGE_120S
  };

  const eventName = eventMap[seconds];
  if (eventName) {
    trackEvent(eventName, {
      time_on_page_seconds: seconds,
      engagement_level: getEngagementLevel(seconds)
    });

    // Track engagement-based funnel progression
    if (seconds >= 30) {
      trackFunnelStage('INTEREST', { trigger: 'time_on_page', seconds });
    }
    if (seconds >= 60) {
      trackFunnelStage('CONSIDERATION', { trigger: 'time_on_page', seconds });
    }
  }
};

// Helper functions
const getSectionPosition = (sectionName: string): number => {
  const sectionOrder = ['hero', 'about', 'topics', 'testimonials', 'faq', 'cta'];
  return sectionOrder.indexOf(sectionName.toLowerCase()) + 1;
};

const getEngagementLevel = (seconds: number): string => {
  if (seconds < 15) return 'low';
  if (seconds < 60) return 'medium';
  if (seconds < 120) return 'high';
  return 'very_high';
};

// Topic card interaction tracking
export const trackTopicCardHover = (topicText: string, index: number) => {
  trackEvent(ANALYTICS_EVENTS.TOPIC_CARD_HOVER, {
    topic_text: topicText,
    topic_index: index,
    hover_timestamp: Date.now()
  });
}; 