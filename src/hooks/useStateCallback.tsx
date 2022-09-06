import { useEffect, useRef, useState } from "react";

const useStateCallback = (initState: any) => {
	const [state, setState] = useState(initState);
	let isUpdate = useRef();
	const setXState = (state: any, cb: any) => {
		setState((prev: any) => {
			isUpdate.current = cb;
			return typeof state === "function" ? state(prev) : state;
		});
	};
	useEffect(() => {
		if (isUpdate.current) {
			//@ts-ignore
			isUpdate.current();
		}
	});

	return [state, setXState];
};

export default useStateCallback;
