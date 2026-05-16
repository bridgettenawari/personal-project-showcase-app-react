import Product from "./Product";
function ShopPage({ accessories, onDelete, loading, error}) {
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
					/>
				))}
		</div>
	);
}

export default ShopPage;
