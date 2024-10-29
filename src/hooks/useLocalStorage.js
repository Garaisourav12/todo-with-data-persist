import { useEffect, useState } from "react";

const fetchLocalStorage = (key, initialValue) => {
	const storedValue = localStorage.getItem(key);
	return storedValue ? JSON.parse(storedValue) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
	const [state, setState] = useState(() =>
		fetchLocalStorage(key, initialValue)
	);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState];
};

export default useLocalStorage;
