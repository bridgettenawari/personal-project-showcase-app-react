import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import AddProductPage from "./components/AddProductPage";
import { NavLink } from "react-router-dom";

function App() {
	const [accessories, setAccessories] = useState([]);
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [origin, setOrigin] = useState("");
	const [price, setPrice] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	// DONT FORGET TO RETURN response.json()!!!

	function fetchData() {
		fetch(
			"https://personal-project-showcase-app-react.onrender.com/accessories",
		)
			.then((r) => {
				if (!r.ok) throw new Error(`${r.status} Could not fetch data!`);
				return r.json();
			})
			.then((result) => {
				setLoading(false);
				setAccessories(result);
			})
			.catch((error) => {
				setError(error.message);
				console.error(error.message);
			});
	}
	// takes the already posted data in the API and sets it into a variable called newAccessory which then calls the function with the data and sets the new accessory by passing it into the function hence displaying it on the page
	function handleAddAccessory(e) {
		//prevent reloading on submission
		e.preventDefault();

		//if theres none of the following do not proceed
		if (!image || !name || !price) return;

		if (!description) return <p>No description</p>;

		//create a variable for a new accessory and pass it as a parameter to the function that uses the spread operator to merge the new accesory and the existing accessories
		const newAccessory = {
			id: Date.now(),
			image: image,
			name: name.trim(),
			description: description,
			origin: origin,
			price: price,
		};

		// call the add Accessory then reset the inputs
		addAccessory(newAccessory);
		setImage("");
		setName("");
		setDescription("");
		setOrigin("");
		setPrice("");
	}
	// handles sending data to the API and merging it with the previous existing data in the array of objects but doesnt yet show it on the page
	function addAccessory(newAccessory) {
		fetch(
			"https://personal-project-showcase-app-react.onrender.com/accessories",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				// pass the newAccessory variable as a parameter
				body: JSON.stringify(newAccessory),
			},
		)
			.then((r) => {
				if (!r.ok) {
					throw new Error(`${r.status} Accessory could not be posted!`);
				}
				return r.json();
			})
			.then((data) => {
				setLoading(false);
				setAccessories([...accessories, newAccessory]);
			})
			.catch((error) => {
				setError(error.message);
				console.error(error.message);
			});
	}
	function deleteAccessory(id) {
		fetch(
			`https://personal-project-showcase-app-react.onrender.com/accessories/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				//body: JSON.stringify is only in post and patch
				// data and r.json() is only used in post patch and get
			},
		)
			.then((r) => {
				if (!r.ok) {
					throw new Error(`${r.status} Accessory not deleted`);
				}
			})
			.then(() =>
				//filter through accessories and return the accessories that don't have the ID of the deleted product
				setAccessories(accessories.filter((accesory) => accesory.id !== id)),
			)
			.catch((error) => {
				setError(error.message);
				console.error(error.message);
			});
	}
	function updateAccessory(id, updatedAccessory) {
		fetch(
			`https://personal-project-showcase-app-react.onrender.com/accessories/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedAccessory), //Pass in the updated accessory which will then be sent to the API
			},
		)
			.then((r) => {
				if (!r.ok) {
					throw new Error(`${r.status} Accessory could not be updated`);
				}
				return r.json();
			})
			.then((updatedAccessory) => {
				setLoading(false);
				//loop through each accessory and if the id of the accessory is the same id as the selected accessory, show the updatedAccessory on the page otherwise just show the normal accessory
				setAccessories(
					accessories.map((accessory) => {
						return accessory.id === id ? updatedAccessory : accessory;
					}),
				);
			})
			.catch((error) => {
				setError(error.message);
				console.error(error.message);
			});
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		// h-screen only does partial for the shop and h-full only does partial for the addproducts page

		<div className="bg-pink-100 min-h-screen ">
			<BrowserRouter>
				<nav className="bg-pink-200 px-10 py-7 flex  justify-evenly border-white border-2 mb-5">
					<NavLink
						to="/"
						//Pass in the isActive as a js parameter to edit when the link is clicked on
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
					<Route
						path="/shop"
						element={
							<ShopPage
								accessories={accessories}
								setAccessories={setAccessories}
								onEdit={updateAccessory}
								onDelete={deleteAccessory}
								loading={loading}
								error={error}
							/>
						}
					/>
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
