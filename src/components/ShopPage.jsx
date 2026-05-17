import Product from "./Product";
function ShopPage({ accessories, onDelete, loading, error, onEdit}) {
	return (
		<div className="grid grid-cols-4 gap-4 p-5">
			{loading ? "Loading..." : ""}
			{error ? <p>error.message</p> : ''}
			{accessories &&
				accessories.map((accessory) => (
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
