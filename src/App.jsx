import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ShopPage from "./components/ShopPage";
import AddProductPage from "./components/AddProductPage";
import { NavLink } from "react-router";

function App() {
	const [accesories, setAccessories] = useState([]);
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [origin, setOrigin] = useState("");
	const [price, setPrice] = useState("");

	function fetchData() {
		fetch("http://localhost:3000/accessories")
			.then((r) => {
				if (!r.ok) throw new Error(`${r.status} Could not fetch data!`);
				return r.json();
			})
			.then((result) => setAccessories(result))
			.catch((error) => console.error(error.message));
	}
	function handleAddAccessory(e) {
		e.preventDefault();
		if (!image || !name || !price) return;
		if (!description) return <p>No description</p>;
		const newAccessory = {
			image: image,
			name: name.trim(),
			description: description,
			origin: origin,
			price: price,
		};
		addAccessory(newAccessory);
		setImage("");
		setName("");
		setDescription("");
		setOrigin("");
		setPrice("");
	}
	function addAccessory(newAccessory) {
		fetch("http://localhost:3000/accessories", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newAccessory),
		})
			.then((r) => {
				if (!r.ok) {
					throw new Error(`${r.status} Accessory could not be posted!`);
				}
				return r.json();
			})
			.then((data) => setAccessories([...accesories, newAccessory]))
			.catch((error) => console.error(error.message));
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="bg-pink-100 h-full || h-screen">
			<BrowserRouter>
				<nav className="bg-pink-200 px-10 py-7 flex  justify-evenly border-white border-2 mb-5">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-white text-decoration: underline text-xl "
								: "text-purple-900 text-xl"
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/shop"
						className={({ isActive }) =>
							isActive
								? "text-white text-decoration: underline text-xl "
								: "text-purple-900 text-xl"
						}
					>
						Shop
					</NavLink>
					<NavLink
						to="/add-product"
						className={({ isActive }) =>
							isActive
								? "text-white text-decoration: underline text-xl "
								: "text-purple-900 text-xl"
						}
					>
						Add Product
					</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<ShopPage accessories={accesories} />} />
					<Route
						path="/add-product"
						element={
							<AddProductPage
								handleAddAccessory={handleAddAccessory}
								image={image}
								setImage={setImage}
								name={name}
								setName={setName}
								description={description}
								setDescription={setDescription}
								origin={origin}
								setOrigin={setOrigin}
								price={price}
								setPrice={setPrice}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
