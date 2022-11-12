import React from "react";

import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonMenu from "../ButtonMenu";

const mockedButtonAction = jest.fn();


describe("Test ButtonMenu component", () => {
	
	beforeEach(() => {
		render(<ButtonMenu checked={false} setApproval={mockedButtonAction}/>);
	});
	afterEach(() => {
		cleanup();
	});
	
	
	test("Component should render", () => {
		const buttonMenuContainer = screen.getByTestId("button-menu-container");
		const ApproveButton = screen.getByTestId("approve-button");
		const RejectButton = screen.getByTestId("reject-button");
		
		expect(buttonMenuContainer).toBeInTheDocument();
		expect(ApproveButton).toBeInTheDocument();
		expect(RejectButton).toBeInTheDocument();
	});
	test("initial buttonMenu does not include reset button", () => {
		
		const ResetButton = screen.queryByTestId("reset-button");
		expect(ResetButton).not.toBeInTheDocument();
		
	});
	
});