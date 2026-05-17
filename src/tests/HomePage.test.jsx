import { render, screen } from "@testing-library/react";
import HomePage from "../components/HomePage";
import useFetchHomeData from "../useFetchHomeData";
import { vi } from "vitest";

/*
bc we use a custom hook to fetch data for homepage apparently you cant just test it like that 
you have to mock the custom hook using vi.mock(and in here you put what you want it to mock)
then you create fake data then in the actual test you have to write whatyourmocking.mockReturnValue([your fake data here])
then you can test normally
*/

vi.mock("../useFetchHomeData");
const mockHomePage = [
	{
		id: "1",
		name: "Linda's Accessories",
		description: "All Your Favourite Accessories In One Place!",
		phoneNumber: "0712345678",
	},
];
test("HomePage renders successfully", () => {
	useFetchHomeData.mockReturnValue([mockHomePage]);
	render(<HomePage />);
	expect(screen.getByText(/Linda's Accessories/i)).toBeInTheDocument();
	expect(
		screen.getByText(/All Your Favourite Accessories In One Place!/i),
	).toBeInTheDocument();
	expect(screen.getByText(/0712345678/i)).toBeInTheDocument();
});
