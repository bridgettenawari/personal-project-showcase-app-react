import { useEffect,useState } from "react";

const useFetchHomeData = (url) => {
	const [home, setHome] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((r) => {
				if (!r.ok) {
					throw new Error(`${r.status} Data could not be fetched`);
				}
				return r.json();
			})
			.then((data) => setHome(data));
	}, [url]);
	return [home];
};

export default useFetchHomeData;
