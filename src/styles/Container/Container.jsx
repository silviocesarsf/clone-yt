import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	background-color: ${(props) => props.backgroundColor};
	display: flex;
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	gap: ${(props) => props.gap};
	flex-direction: ${(props) => props.dir};
	padding: ${(props) => props.padding};
`;
