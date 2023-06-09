import styled from "styled-components";

export const Input = styled.input`
	width: 40vw;
	height: 42px;
	background-color: transparent;
	font-size: 1em;
	color: white;
	border: 1px solid ${(props) => props.theme.colors.gray};
	padding: 1rem;
	position: relative;
	left: 30px;
	border-radius: 20px 0px 0px 20px;

	@media (max-width: 860px) {
		width: 30vw;
	}
`;
