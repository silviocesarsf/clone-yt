import styled from "styled-components";

export const PhotoUser = styled.div`
	background-image: ${(props) =>
		props.backgroundColor
			? `url(${props.backgroundColor})`
			: "url(https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png)"};
	background-size: cover;
	height: ${(props) => (props.height ? props.height : "30px")};
	width: ${(props) => (props.width ? props.width : "30px")};
	border-radius: 100%;
	cursor: pointer;
`;
