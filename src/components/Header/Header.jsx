import React from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { RxKeyboard } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import logo from "../../assets/youtube-logo.png";
import { Input } from "../../styles/Input/Input";
import { PhotoUser } from "../../styles/PhotoUser/PhotoUser";

const Header = () => {
	return (
		<Container
			className="header"
			justify="center"
			width="100%"
		>
			<Container className="search-box_header">
				<Input type="text" placeholder="Pesquisar" />
				<div className="icon-keyboard">
					<RxKeyboard />
				</div>
				<div className="icon-search">
					<IoIosSearch />
				</div>
				<div className="icon-voice">
					<MdKeyboardVoice className=" icon" />
				</div>
			</Container>
			<Container
				justify="space-between"
				gap="20px"
				className="right-header"
			>
				<RiVideoAddLine className="icon" />
				<AiOutlineBell className="icon" />
				<PhotoUser />
			</Container>
		</Container>
	);
};

export default Header;
