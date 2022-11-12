import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import ImageSection from "../ImageSection";
import renderer from "react-test-renderer";

describe("Test ImageSection component", () => {
	afterEach(() => {
		cleanup();
	});
	
	test("Should render component", () => {
		render(<ImageSection approved={false} rejected={false} />);
		const container = screen.getByTestId("image-container");
		const image = screen.getByTestId("image");
		
		expect(container).toBeInTheDocument();
		expect(image).toBeInTheDocument();
		
	});
	
	test("matches snapshot", () => {
		const tree = renderer.create(<ImageSection approved={false} rejected={false}/>).toJSON();
		expect(tree).toMatchSnapshot();
		
	});
});