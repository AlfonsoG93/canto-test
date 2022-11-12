import React, {useReducer} from "react";
import "./App.css";
import Header from "./components/Header";
import ButtonMenu from "./components/ButtonMenu";
import ImageSection from "./components/ImageSection";
import {Col, Row} from "antd";

interface ApprovalToolState {
	checked: boolean;
	approved: boolean;
	rejected: boolean;
}

const initialState: ApprovalToolState = {
	checked: false,
	approved: false,
	rejected: false
};

export enum ApprovalToolActionsTypes {
	APPROVE = "APPROVE",
	REJECT = "REJECT",
	RESET = "RESEST"
	
}

export interface ApprovalToolActions {
	type: ApprovalToolActionsTypes;
}

function approvalToolReducer(state: ApprovalToolState, action: ApprovalToolActions) {
	const {type} = action;
	switch (type) {
		case ApprovalToolActionsTypes.APPROVE:
			return {
				checked: true,
				approved: true,
				rejected: false
			};
		case ApprovalToolActionsTypes.REJECT:
			return {
				checked: true,
				approved: false,
				rejected: true
			};
		case ApprovalToolActionsTypes.RESET:
			return initialState;
		
	}
	
}

function App() {
	
	const [approvalToolState, dispatch] = useReducer(approvalToolReducer, initialState);
	return (
		<div className="App">
			<Row style={{height: "10vh", alignItems: "center"}}>
				<Col span={24}>
					<Header title={"PoC Approving Tool"}/>
				</Col>
			</Row>
			
			<Row style={{borderTop: "solid", height: "90vh"}}>
				
				<Col xs={{span: 12}} sm={{span: 12}} lg={{span: 4}} style={{
					borderRight: "solid", display: "flex", alignItems: "self-end", justifyContent: "center"
					
				}}>
					<ButtonMenu checked={approvalToolState.checked}
					            setApproval={(action: ApprovalToolActions) => dispatch(action)}
					/>
				</Col>
				
				<Col xs={{span: 12}} sm={{span: 12}} lg={{span: 20}}>
					<ImageSection
						approved={approvalToolState.approved}
						rejected={approvalToolState.rejected}
					/>
				</Col>
			
			</Row>
		</div>
	);
}

export default App;
