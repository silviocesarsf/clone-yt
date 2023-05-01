import React from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import { PhotoUser } from "../../styles/PhotoUser/PhotoUser";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import {
	MdOutlineSubscriptions,
	MdOutlineVideoLibrary,
	MdOutlineExpandMore,
	MdOutlineWatchLater,
	MdOutlineWifiTethering,
	MdNewspaper,
	MdOutlineFeedback,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiMovieLine, RiShoppingBag2Line } from "react-icons/ri";
import { FiFlag, FiScissors } from "react-icons/fi";
import {
	BsMusicNote,
	BsFire,
	BsTrophy,
	BsLightbulb,
	BsYoutube,
} from "react-icons/bs";
import { GiClapperboard } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { RxGear } from "react-icons/rx";
import { IoIosHelpCircleOutline } from "react-icons/io";
import shortsIcon from "../../assets/youtube-shorts-icon.svg";
import { SectionTitle } from "../../styles/Title/SectionTitle";
import logo from "../../assets/youtube-logo.png";

const Sidebar = () => {
	return (
		<Container
			height="100vh"
			justify="flex-start"
			width="210px"
			className="sidebar"
			dir="column"
		>
			<Container
				justify="space-between"
				width="100%"
				className="top-sidebar"
			>
				<AiOutlineMenu className="icon" />
				<img
					className="logo-header"
					style={{ maxWidth: "110px", marginRight: "30px" }}
					src={logo}
					alt=""
				/>
			</Container>
			<div className="sidebar-section">
				<div className="sidebar-item active">
					<AiFillHome className="sidebar-icon" />
					Início
				</div>
				<div className="sidebar-item">
					<img
						style={{ maxHeight: "1.5em", color: "white" }}
						src={shortsIcon}
						alt=""
					/>
					Shorts
				</div>
				<div className="sidebar-item">
					<MdOutlineSubscriptions className="sidebar-icon" />
					Inscrições
				</div>
			</div>
			<div className="sidebar-section">
				<div className="sidebar-item ">
					<MdOutlineVideoLibrary className="sidebar-icon" />
					Biblioteca
				</div>
				<div className="sidebar-item">
					<VscHistory className="sidebar-icon" />
					Histórico
				</div>
				<div className="sidebar-item">
					<RiMovieLine className="sidebar-icon" />
					Seus vídeos
				</div>
				<div className="sidebar-item">
					<MdOutlineWatchLater className="sidebar-icon" />
					Assistir mais tarde
				</div>
				<div className="sidebar-item">
					<FiScissors className="sidebar-icon" />
					Seus clipes
				</div>
				<div className="sidebar-item">
					<MdOutlineExpandMore className="sidebar-icon" />
					Mostrar mais
				</div>
			</div>
			<div className="sidebar-section">
				<SectionTitle>Inscrições </SectionTitle>
				<Container gap="10px" className="sidebar_channel ">
					<PhotoUser />
					<div className="channel-name">Canal</div>
				</Container>
				<Container gap="10px" className="sidebar_channel ">
					<PhotoUser />
					<div className="channel-name">Canal</div>
				</Container>
				<Container gap="10px" className="sidebar_channel ">
					<PhotoUser />
					<div className="channel-name">Canal</div>
				</Container>
				<Container gap="10px" className="sidebar_channel ">
					<PhotoUser />
					<div className="channel-name">Canal</div>
				</Container>
				<Container gap="10px" className="sidebar_channel ">
					<MdOutlineExpandMore className="sidebar-icon" />
					<div>Mostrar mais 299</div>
				</Container>
			</div>
			<div className="sidebar-section">
				<SectionTitle>Explorar </SectionTitle>
				<div>
					<BsFire className="sidebar-icon" />
					Em alta
				</div>
				<div>
					<RiShoppingBag2Line className="sidebar-icon" />
					Shopping
				</div>
				<div>
					<BsMusicNote className="sidebar-icon" />
					Música
				</div>
				<div>
					<GiClapperboard className="sidebar-icon" />
					Filmes e programas
				</div>
				<div>
					<MdOutlineWifiTethering className="sidebar-icon" />
					Ao vivo
				</div>
				<div>
					<CgGames className="sidebar-icon" />
					Jogos
				</div>
				<div>
					<MdNewspaper className="sidebar-icon" />
					Notícias
				</div>
				<div>
					<BsTrophy className="sidebar-icon" />
					Esportes
				</div>
				<div>
					<BsLightbulb className="sidebar-icon" />
					Aprender
				</div>
			</div>
			<div className="sidebar-section">
				<SectionTitle>Mais do Youtube </SectionTitle>
				<div>
					<BsYoutube className="sidebar-icon" />
					Youtube Premium
				</div>
				<div>
					<SiYoutubestudio className="sidebar-icon" />
					Youtube Studio
				</div>
				<div>
					<SiYoutubemusic className="sidebar-icon" />
					Youtube Music
				</div>
				<div>
					<TbBrandYoutubeKids className="sidebar-icon" />
					Youtube Kids
				</div>
			</div>
			<div className="sidebar-section">
				<div>
					<RxGear className="sidebar-icon" />
					Configurações
				</div>
				<div>
					<FiFlag className="sidebar-icon" />
					Histórico de denúncias
				</div>
				<div>
					<IoIosHelpCircleOutline className="sidebar-icon" />
					Ajuda
				</div>
				<div>
					<MdOutlineFeedback className="sidebar-icon" />
					Enviar feedback
				</div>
			</div>
		</Container>
	);
};

export default Sidebar;
