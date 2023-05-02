import { Container } from "../../styles/Container/Container";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
	MdOutlineSubscriptions,
	MdOutlineVideoLibrary,
} from "react-icons/md";
import shortsIcon from "../../assets/youtube-shorts-icon.svg";
import "./styles.css";

const BottomBar = () => {
	return (
		<Container
			className="bottom-bar"
			height="60px"
			width="100%"
			justify="space-between"
		>
			<Container gap="5px" dir="column" className="icon-mobile">
				<AiFillHome />
				<p>Home</p>
			</Container>
			<Container gap="5px" dir="column" className="icon-mobile">
				<img
					style={{ maxWidth: "15px" }}
					src={shortsIcon}
					alt=""
				/>
				<p>Shorts</p>
			</Container>
			<Container gap="5px" dir="column" className="icon-mobile">
				<MdOutlineSubscriptions />
				<p>Inscrições</p>
			</Container>
			<Container gap="5px" dir="column" className="icon-mobile">
				<MdOutlineVideoLibrary />
				<p>Biblioteca</p>
			</Container>
		</Container>
	);
};

export default BottomBar;
