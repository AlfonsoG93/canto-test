import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import SvgContainer from "../SvgContainer";

describe("SvgContainer component", () => {
	afterEach(() => {
		cleanup();
	});
	
	test("Should render component default", () => {
		render(<SvgContainer approved={false} rejected={false}/>);
		const container = screen.getByTestId("result-container");
		const approveResult = screen.queryByTestId("approve-result");
		const rejectResult = screen.queryByTestId("reject-result");
		
		expect(container).toBeInTheDocument();
		expect(approveResult).not.toBeInTheDocument();
		expect(rejectResult).not.toBeInTheDocument();
		
	});
	test("Should render component default", () => {
		render(<SvgContainer approved={true} rejected={false}/>);
		const container = screen.getByTestId("result-container");
		const approveResult = screen.queryByTestId("approve-result");
		const rejectResult = screen.queryByTestId("reject-result");
		
		expect(container).toBeInTheDocument();
		expect(approveResult).toBeInTheDocument();
		expect(rejectResult).not.toBeInTheDocument();
		
	});
	test("Should render component default", () => {
		render(<SvgContainer approved={false} rejected={true}/>);
		const container = screen.getByTestId("result-container");
		const approveResult = screen.queryByTestId("approve-result");
		const rejectResult = screen.queryByTestId("reject-result");
		
		expect(container).toBeInTheDocument();
		expect(approveResult).not.toBeInTheDocument();
		expect(rejectResult).toBeInTheDocument();
		
	});
	
});