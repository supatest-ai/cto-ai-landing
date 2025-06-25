import { useEffect, useRef, useCallback } from 'react';
import {
  trackPageView,
  trackScrollProgress,
  trackTimeOnPage,
  trackSectionView,
  setUserData
} from './analytics';

// Section observer hook for tracking section views
export const useAnalytics = () => {
  const timeStartRef = useRef<number>(Date.now());
  const scrollThresholdsRef = useRef<Set<number>>(new Set());
  const timeThresholdsRef = useRef<Set<number>>(new Set());
  const sectionsViewedRef = useRef<Set<string>>(new Set());

  // Initialize analytics on mount
  useEffect(() => {
    // Track initial page view
    trackPageView();

    // Set user properties based on browser/device info
    setUserData({
      browser: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      platform: navigator.platform
    });

    // Set initial timestamp
    timeStartRef.current = Date.now();
  }, []);

  // Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track scroll milestones
      [25, 50, 75, 100].forEach(threshold => {
        if (scrollPercentage >= threshold && !scrollThresholdsRef.current.has(threshold)) {
          scrollThresholdsRef.current.add(threshold);
          trackScrollProgress(threshold);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  // Time tracking effect
  useEffect(() => {
    const checkTimeThresholds = () => {
      const currentTime = Date.now();
      const timeOnPage = Math.floor((currentTime - timeStartRef.current) / 1000);

      [30, 60, 120].forEach(threshold => {
        if (timeOnPage >= threshold && !timeThresholdsRef.current.has(threshold)) {
          timeThresholdsRef.current.add(threshold);
          trackTimeOnPage(threshold);
        }
      });
    };

    const interval = setInterval(checkTimeThresholds, 5000); // Check every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Section view tracking using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Trigger when 20% of section is visible
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section') || 'unknown';
          if (!sectionsViewedRef.current.has(sectionName)) {
            sectionsViewedRef.current.add(sectionName);
            trackSectionView(sectionName);
          }
        }
      });
    }, observerOptions);

    // Observe all sections with data-section attribute
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Return tracking functions for manual use
  return {
    // Re-export tracking functions for manual event tracking
    trackPageView,
    trackScrollProgress,
    trackTimeOnPage,
    trackSectionView
  };
};

// Hook for tracking element interactions
export const useElementTracking = () => {
  const trackElementClick = useCallback((elementType: string, elementId: string, additionalData?: Record<string, string | number | boolean | null>) => {
    // This can be used for tracking specific element clicks
    console.log(`Element clicked: ${elementType} - ${elementId}`, additionalData);
  }, []);

  const trackElementHover = useCallback((elementType: string, elementId: string, duration?: number) => {
    // This can be used for tracking hover events
    console.log(`Element hovered: ${elementType} - ${elementId}`, { duration });
  }, []);

  return {
    trackElementClick,
    trackElementHover
  };
};

// Hook specifically for CTA tracking
export const useCTATracking = () => {
  const trackCTAInteraction = useCallback((ctaLocation: string, ctaText: string, interactionType: 'click' | 'hover' | 'view') => {
    console.log(`CTA ${interactionType}: ${ctaLocation} - ${ctaText}`);
    // Additional CTA-specific tracking logic can be added here
  }, []);

  return {
    trackCTAInteraction
  };
}; 