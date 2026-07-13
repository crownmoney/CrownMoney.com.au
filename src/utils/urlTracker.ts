/**
 * Utility to track the user's initial landing URL and extract query parameters.
 */

// Initialize and save landing URL if not already set
export const initUrlTracker = () => {
  if (typeof window === 'undefined') return;
  
  // Save landing URL in sessionStorage if it doesn't exist (per session)
  if (!sessionStorage.getItem('crown_landing_url')) {
    sessionStorage.setItem('crown_landing_url', window.location.href);
  }
  
  // Also save in localStorage as backup/persistent first-touch across sessions
  if (!localStorage.getItem('crown_landing_url_backup')) {
    localStorage.setItem('crown_landing_url_backup', window.location.href);
  }
};

// Parse parameters from any URL string as key-value pairs
export const parseUrlParams = (urlStr: string): Record<string, string> => {
  try {
    const url = new URL(urlStr);
    const params: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  } catch (e) {
    // Fallback if URL parsing fails or if it's a partial URL
    try {
      const search = urlStr.split('?')[1];
      if (!search) return {};
      const params: Record<string, string> = {};
      const searchParams = new URLSearchParams(search);
      searchParams.forEach((value, key) => {
        params[key] = value;
      });
      return params;
    } catch (err) {
      return {};
    }
  }
};

// Get the full tracking data to send with leads
export const getLeadSourceData = () => {
  if (typeof window === 'undefined') {
    return {
      landing_url: '',
      landing_params: {},
      current_url: '',
      current_params: {}
    };
  }

  const landingUrl = sessionStorage.getItem('crown_landing_url') || 
                     localStorage.getItem('crown_landing_url_backup') || 
                     window.location.href;
                     
  const currentUrl = window.location.href;

  return {
    landing_url: landingUrl,
    landing_params: parseUrlParams(landingUrl),
    current_url: currentUrl,
    current_params: parseUrlParams(currentUrl)
  };
};
