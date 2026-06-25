import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GOOGLE_ANALYTICS_MEASUREMENT_ID = "G-QQZKW7J7MS";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "page_view", {
      send_to: GOOGLE_ANALYTICS_MEASUREMENT_ID,
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default GoogleAnalytics;
