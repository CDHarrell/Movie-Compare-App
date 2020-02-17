// debounce function for delay fetch request
const debounce = (cb, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearInterval(timeoutId);
		}
		timeoutId = setTimeout(() => {
			cb.apply(null, args);
		}, delay);
	};
};
