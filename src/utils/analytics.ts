export const trackEvent = (eventName: string, label: string) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", eventName, {
			event_category: "engagement",
			event_label: label,
		});
	}
};
