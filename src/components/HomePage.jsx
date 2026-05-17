import useFetchHomeData from "../useFetchHomeData";
import { useState } from "react";
function HomePage() {
	const [home] = useFetchHomeData(
		"https://personal-project-showcase-app-react.onrender.com/home",
	);
	return (
		<div className="w-full h-screen bg-cover bg-center flex justify-center items-center">
			{home &&
				home.map((homeItem) => {
					return (
						<div key={homeItem.id}>
							<h1 className="text-6xl text-pink-900 font-extrabold">
								ᥫ᭡{homeItem.name}
							</h1>
							<br />
							<p className="text-gray-900 text-xl font-bold">
								{homeItem.description}
							</p>
							<br />
							<p className="text-gray-700 text-md">
								Contact Me: {homeItem.phoneNumber}
							</p>
						</div>
					);
				})}
		</div>
	);
}

export default HomePage;
