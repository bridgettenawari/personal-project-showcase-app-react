import useFetchHomeData from "../useFetchHomeData";
import { useState } from "react";
function HomePage() {
	const [home] = useFetchHomeData("http://localhost:3000/home");
	return (
		<div className="w-full h-screen bg-cover bg-center flex justify-center items-center">
			{home &&
				home.map((homeItem) => {
					return (
						<div key={homeItem.id}>
							<h1>{homeItem.name}</h1>
							<p>{homeItem.description}</p>
							<p>Contact Me: {homeItem.phoneNumber}</p>
						</div>
					);
				})}
		</div>
	);
}

export default HomePage;
