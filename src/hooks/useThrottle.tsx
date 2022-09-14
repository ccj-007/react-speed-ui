import { useState, useEffect, useRef } from "react";

function useThrottle(fn: Function, delay = 300, deps: any[] = []) {
	let previous = useRef(0);
	let [time, setTime] = useState(delay);
	useEffect(() => {
		let now = Date.now();
		if (now - previous.current > time) {
			fn();
			previous.current = now;
		}
	}, deps);

	const cancel = () => {
		setTime(0);
	};

	return [cancel];
}

export default useThrottle;
