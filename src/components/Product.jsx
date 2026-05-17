import { useState } from "react";

function Product({ accessory, onDelete, onEdit }) {
	function handleUpdate(e) {
		e.preventDefault();
		const updatedAccessory = {
			image: editedImage,
			name: editedName,
			description: editedDescription,
			origin: editedOrigin,
			price: editedPrice,
		};
		onEdit(accessory.id, updatedAccessory);
		setEdit(false);
	}
	const [edit, setEdit] = useState(false); //Shows a diff form for editing an accessory
	//Set a diff state for each edited item
	//Set the initial value as the value of the accessory e.g. accessory.name
	const [editedImage, setEditedImage] = useState(accessory.image);
	const [editedName, setEditedName] = useState(accessory.name);
	const [editedDescription, setEditedDescription] = useState(
		accessory.description,
	);
	const [editedOrigin, setEditedOrigin] = useState(accessory.origin);
	const [editedPrice, setEditedPrice] = useState(accessory.price);

	return (
		<div className="">
			<div className="bg-white rounded-lg p-5 shadow-md">
				{/* If editing is true show an input bar and set the value to the edited version and set onChange to the setter function of the edited version */}
				{edit ? (
					<input
						type="text"
						value={editedImage}
						onChange={(e) => setEditedImage(e.target.value)}
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2 mt-2"
					/>
				) : (
					<img
						className="w-full h-60 object-cover rounded-md border border-gray-300"
						src={accessory.image}
						alt={accessory.name}
					/>
				)}
				{edit ? (
					<input
						type="text"
						value={editedName}
						onChange={(e) => setEditedName(e.target.value)}
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2 mt-2"
					/>
				) : (
					<h3 className="text-xl font-bold mt-3">{accessory.name}</h3>
				)}
				{edit ? (
					<input
						type="text"
						value={editedDescription}
						onChange={(e) => setEditedDescription(e.target.value)}
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2 mt-2"
					/>
				) : (
					<p>{accessory.description}</p>
				)}
				{edit ? (
					<select
						value={editedOrigin}
						onChange={(e) => setEditedOrigin(e.target.value)}
						className="pr-5 px-2 py-2 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2 mt-2"
					>
						<option value="USA">USA</option>
						<option value="Canada">Canada</option>
						<option value="Italy">Italy</option>
						<option value="France">France</option>
						<option value="China">China</option>
					</select>
				) : (
					<span className="bg-gray-100 rounded-2xl px-3 py-1 text-gray-500">
						{accessory.origin}
					</span>
				)}
				{edit ? (
					<input
						type="text"
						value={editedPrice}
						onChange={(e) => setEditedPrice(e.target.value)}
						className="flex px-2 py-2 w-98/100 text-gray-500 text-sm bg-white border border-gray-300 rounded-xl ml-2 mt-2 mb-2"
					/>
				) : (
					<p className="font-bold mt-2">{accessory.price}</p>
				)}

				<button
					onClick={() => onDelete(accessory.id)}
					className="bg-red-300 text-white p-3 rounded-lg mr-8 cursor-pointer"
				>
					Delete
				</button>
				{edit ? (
					<button
						onClick={handleUpdate}
						className="bg-green-300 text-white p-3 rounded-lg"
					>
						Update
					</button>
				) : (
					<button
						onClick={() => setEdit(true)}
						className="bg-orange-200 text-white p-3 rounded-lg mr-10 cursor-pointer"
					>
						Edit
					</button>
				)}
			</div>
		</div>
	);
}

export default Product;
