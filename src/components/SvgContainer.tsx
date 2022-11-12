import Check from "../images/check.svg";
import Close from "../images/close.svg";

interface SvgContainerProps {
	approved: boolean,
	rejected: boolean
	
}

export default function SvgContainer(props: SvgContainerProps) {
	return (
		<div
			data-testid={"result-container"}
			style={{
				backgroundColor: "white",
				borderRadius: "5px",
				maxHeight: "12%",
				display: "flex",
			}}>
			{props.approved && <img
				data-testid={"approve-result"}
				style={{maxWidth: "100%"}}
				src={Check} alt={"Check"}
			/>}
			{props.rejected &&
				<img
					data-testid={"reject-result"}
					style={{maxWidth: "100%"}}
					src={Close}
					alt={"Close"}

				/>}
		</div>
	);
	
}