import { useState, useEffect } from "react";

function useDebounce(value: any, delay = 300) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		/*会在上一次清除 */
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
}

export default useDebounce;
