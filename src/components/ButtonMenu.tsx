import {Button, Col, Row} from "antd";
import React from "react";
import {ApprovalToolActions, ApprovalToolActionsTypes} from "../App";


interface ButtonMenuProps {
	checked: boolean;
	setApproval: (action: ApprovalToolActions) => void;
}

export default function ButtonMenu(props: ButtonMenuProps) {
	return (
		<div data-testid={"button-menu-container"}
		     style={{width: "80%", paddingBottom: "2rem"}}
		>
			{!props.checked && (
				<React.Fragment>
					<Row style={{marginBottom: "8px"}}>
						<Col span={24}>
							<Button
								data-testid={"approve-button"}
								onClick={() => props.setApproval({type: ApprovalToolActionsTypes.APPROVE})}
								type={"primary"}
								size={"large"}
								shape={"round"}
								block
								style={{backgroundColor: "green"}}
							>
								Approve
							</Button>
						</Col>
					</Row>
					
					<Row style={{marginTop: "8px", marginBottom: "8px"}}>
						<Col span={24}>
							<Button
								data-testid={"reject-button"}
								onClick={() => props.setApproval({type: ApprovalToolActionsTypes.REJECT})}
								type={"primary"}
								size={"large"}
								shape={"round"}
								block
								danger
							>
								Reject
							</Button>
						</Col>
					</Row>
				</React.Fragment>
			)}
			{props.checked && (
				<Row style={{marginTop: "8px"}}>
					<Col span={24}>
						<Button
							data-testid={"reset-button"}
							onClick={() => props.setApproval({type: ApprovalToolActionsTypes.RESET})}
							type={"primary"}
							size={"large"}
							shape={"round"}
							block
						>
							Reset
						</Button>
					</Col>
				</Row>
			)}
		</div>
	);
}