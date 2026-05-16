import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import ShopPage from "./components/ShopPage";
import AddProductPage from "./components/AddProductPage";
import { NavLink } from "react-router";

function App() {
	return (
		<div className="bg-pink-100 h-full">
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
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/add-product" element={<AddProductPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
