export const host = import.meta.env.DEV
	? "/"
	: import.meta.env.VITE_BASE_API_URL;
