import Product from "./Product";
function ShopPage({ accessories }) {
	return (
		<div className="grid grid-cols-4 gap-4 p-5">
			{accessories &&
				accessories.map((accessory) => (
					<Product key={accessory.id} accessory={accessory} />
				))}
		</div>
	);
}

export default ShopPage;
