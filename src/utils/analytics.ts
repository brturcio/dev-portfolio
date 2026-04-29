type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", eventName, params);
	}
};
