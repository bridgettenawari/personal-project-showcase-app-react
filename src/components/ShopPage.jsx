import { useState } from "react";
import Product from "./Product";
import SearchBar from "./SearchBar.jsx";
function ShopPage({ accessories, onDelete, loading, error, onEdit }) {
	const [searchedAccessories, setSearchedAccessories] = useState("");
	const filteredAccessories = accessories.filter((accessory) => {
		return (
			accessory.name
				.toLowerCase()
				.includes(searchedAccessories.toLowerCase()) ||
			accessory.description
				.toLowerCase()
				.includes(searchedAccessories.toLowerCase()) ||
			accessory.origin.toLowerCase().includes(searchedAccessories.toLowerCase())
		);
	});
	return (
		<div className="grid grid-cols-4 gap-4 p-5">
			<SearchBar
				searchedAccessories={searchedAccessories}
				setSearchedAccessories={setSearchedAccessories}
			/>
			{loading ? "Loading..." : ""}
			{error ? <p>{error.message}</p> : ""}
			{accessories &&
				filteredAccessories.map((accessory) => (
					<Product
						key={accessory.id}
						accessory={accessory}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
		</div>
	);
}

export default ShopPage;
