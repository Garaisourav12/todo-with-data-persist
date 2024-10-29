import { useEffect, useRef, useState } from "react";

const fetchLocalStorage = (key, initialValue) => {
	const storedValue = localStorage.getItem(key);
	return storedValue ? JSON.parse(storedValue) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
	const [state, setState] = useState(() =>
		fetchLocalStorage(key, initialValue)
	);

	const ref = useRef(true);

	useEffect(() => {
		if (ref.current) {
			ref.current = false;
			return;
		}
		console.log(ref.current);

		localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState];
};

export default useLocalStorage;
