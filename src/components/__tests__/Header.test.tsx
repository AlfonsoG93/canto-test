import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import Header from "../Header";
import renderer from "react-test-renderer";

const testTitle = "Test Title";


describe("Test Header component", () => {
	afterEach(() => {
		cleanup();
	});
	
	test("Should render component", () => {
		render(<Header title={testTitle}/>);
		const HeaderElem = screen.getByTestId("header-div");
		const HeaderTitle = screen.getByTestId("header-title");
		
		expect(HeaderElem).toBeInTheDocument();
		expect(HeaderTitle).toBeInTheDocument();
		expect(HeaderTitle).toHaveTextContent(testTitle);
		
	});
	
	test("matches snapshot", () => {
		const tree = renderer.create(<Header title={testTitle}/>).toJSON();
		expect(tree).toMatchSnapshot();
		
	});
});