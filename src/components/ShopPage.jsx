import useFetchData from "../useFetchData";
import Product from "./Product";
function ShopPage() {
	const [data] = useFetchData("http://localhost:3000/accessories");
	return (
		<div className="grid grid-cols-4 gap-4 p-5">
			{data &&
				data.map((accessory) => (
					<Product key={accessory.id} accessory={accessory} />
				))}
		</div>
	);
}

export default ShopPage;
