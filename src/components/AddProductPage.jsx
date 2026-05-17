import { useId, useState } from "react";
function AddProductPage({
	handleAddAccessory,
	image,
	setImage,
	name,
	setName,
	description,
	setDescription,
	origin,
	setOrigin,
	price,
	setPrice,
}) {
	const accessoryId = useId(); //Give each input and its label an id for accessibility
	// set the value as the state value and put the onSubmit on the form not the button
	return (
		<div className="bg-white max-w-2xl rounded-2xl overflow-hidden shadow-xl p-4 mx-auto">
			<form onSubmit={handleAddAccessory}>
				<label
					htmlFor={accessoryId}
					className="px-2 py-2 text-gray-500 text-sm"
				>
					Image URL:
					<input
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2"
						id={accessoryId}
						type="text"
						value={image}
						onChange={(e) => setImage(e.target.value)}
						placeholder="Accessory Image URL"
					/>
				</label>
				<label
					htmlFor={accessoryId}
					className="px-2 py-2 text-gray-500 text-sm"
				>
					Name:
					<input
						id={accessoryId}
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Accessory Name"
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2"
					/>
				</label>
				<label
					htmlFor={accessoryId}
					className="px-2 py-2 text-gray-500 text-sm"
				>
					Description:
					<input
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						id={accessoryId}
						type="text"
						placeholder="Accessory Description"
					/>
				</label>
				<label
					htmlFor={accessoryId}
					className="px-2 py-2 text-gray-500 text-sm"
				>
					Price:
					<input
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2"
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Accessory Price"
					/>
				</label>
				<label
					htmlFor={accessoryId}
					className="px-2 py-2 text-gray-500 text-sm"
				>
					Origin:
				</label>
				{/* always put the js value in the select part when dealing with options so that what you pick will be set as the select value otherwise it wont allow you to change value and will stick with the first one */}
				<select
					value={origin}
					onChange={(e) => setOrigin(e.target.value)}
					className="pr-5 px-2 py-2 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2m"
				>
					<option value="USA">USA</option>
					<option value="Canada">Canada</option>
					<option value="Italy">Italy</option>
					<option value="France">France</option>
					<option value="China">China</option>
				</select>
				<button
					type="submit"
					className=" bg-pink-300 text-white text-sm p-3 ml-10 rounded-3xl mt-5 h-auto cursor-pointer hover:bg-pink-400"
				>
					Add Project
				</button>
			</form>
		</div>
	);
}

export default AddProductPage;
