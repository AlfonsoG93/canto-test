import testImage from "../images/testimage.jpeg";
import SvgContainer from "./SvgContainer";

interface ImageSectionProps {
	approved: boolean;
	rejected: boolean;
}


export default function ImageSection(props: ImageSectionProps) {
	return (
		<div
			
			data-testid={"image-container"}
			style={{paddingBottom: "2rem"}}
		>
			<div
				
				data-testid={"image"}
				style={{
				backgroundImage: `url(${testImage})`, backgroundRepeat: "no-repeat",
				backgroundSize: "contain",
				height: "70vh",
				padding: "1rem",
				margin: "2rem",
				justifyContent: "flex-end",
				display: "flex",
				
			}}>
				<SvgContainer approved={props.approved} rejected={props.rejected}/>
			</div>
		</div>
	);
	
}