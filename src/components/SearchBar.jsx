function SearchBar({ searchedAccessories, setSearchedAccessories }) {
	return (
		<div className="bg-white rounded-2xl pt-5 p-5">
			<label className="text-gray-500 text-sm w-1/6 bg-gray-200 rounded-2xl p-2 ml-2">
				Search:
			</label>
			<input
				placeholder="Search for accessories..."
				value={searchedAccessories}
				onChange={(e) => setSearchedAccessories(e.target.value)}
				className="px-2 py-2 w-4/5 text-gray-500 text-sm bg-white border border-gray-300 rounded-2xl ml-2 mt-2 mb-10"
			/>
			<ul className="pt-5 ml-5 text-pink-950 text-xl font-bold">
				Search by:
				<div className="text-pink-900 pt-3 text-sm/6 list-disc ml-3 font-medium pl-25">
					<li>Accessory name</li>
					<li>Accessory description</li>
					<li>Accessory origin</li>
				</div>
			</ul>
		</div>
	);
}

export default SearchBar;
