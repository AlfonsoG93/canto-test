interface HeaderProps {
	title: string;
}

export default function Header(props: HeaderProps) {
	return (
		<div data-testid={"header-div"}>
			<h1 data-testid={"header-title"}>{props.title}</h1>
		</div>
	);
}