function Product({ accessory, onDelete }) {
	return (
		<div className="">
			<div className="bg-white rounded-lg p-5 shadow-md">
				<img
					className="w-full h-60 object-cover rounded-md border border-gray-300"
					src={accessory.image}
					alt={accessory.name}
				/>
				<h3 className="text-xl font-bold mt-3">{accessory.name}</h3>
				<p>{accessory.description}</p>
				<span className="bg-gray-100 rounded-2xl px-3 py-1 text-gray-500">
					{accessory.origin}
				</span>
				<p className="font-bold mt-2">{accessory.price}</p>
				<button 
				onClick={()=>onDelete(accessory.id)}
				className="bg-red-300 text-white p-3 rounded-lg mr-8 cursor-pointer">
					Delete
				</button>
				<button
					className="bg-orange-200 text-white p-3 rounded-lg mr-10 cursor-pointer"
				>
					Edit
				</button>
			</div>
		</div>
	);
}

export default Product;
