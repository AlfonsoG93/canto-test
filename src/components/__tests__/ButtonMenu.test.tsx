import React from "react";

import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonMenu from "../ButtonMenu";

const mockedButtonAction = jest.fn();


test.only("only the reset button shows when approve is clicked", async () => {
	render(<ButtonMenu checked={false} setApproval={mockedButtonAction}/>);
	
	const ApproveButton = screen.getByText("Approve");
	fireEvent.click(ApproveButton as HTMLElement);
	
	expect(screen.queryByTestId("approve-button")).not.toBeInTheDocument();
	expect(screen.queryByTestId("reset-button")).toBeInTheDocument();
	screen.debug();
});

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
	test.skip("only the reset button shows when approve is clicked", async () => {
		
		
		userEvent.click(screen.queryByTestId("approve-button") as HTMLElement);
		
		expect(screen.queryByTestId("approve-button")).not.toBeInTheDocument();
		expect(screen.queryByTestId("reset-button")).toBeInTheDocument();
	});
	
	test.skip("only the reset button shows when reject is clicked", () => {
		
		const ApproveButton = screen.getByTestId("approve-button");
		const RejectButton = screen.getByTestId("reject-button");
		const ResetButton = screen.getByTestId("reset-button");
		
		
		expect(ApproveButton).not.toBeInTheDocument();
		expect(RejectButton).not.toBeInTheDocument();
		expect(ResetButton).toBeInTheDocument();
	});
	
});