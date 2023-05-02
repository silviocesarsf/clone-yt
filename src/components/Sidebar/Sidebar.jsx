import React, { useContext, useState } from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import { PhotoUser } from "../../styles/PhotoUser/PhotoUser";
import { AiFillHome } from "react-icons/ai";
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
import { CgGames, CgPlayList } from "react-icons/cg";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { RxGear } from "react-icons/rx";
import { BiChevronUp } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import shortsIcon from "../../assets/youtube-shorts-icon.png";
import { SectionTitle } from "../../styles/Title/SectionTitle";
import logo from "../../assets/youtube-logo.png";
import { ContextProvider } from "../../context/Context";
import { motion } from "framer-motion";

const Sidebar = () => {
	const [viewMorePlaylists, setViewMorePlaylists] = useState(false);
	const [viewMoreChannels, setViewMoreChannels] = useState(false);

	const { channelsSubscribed } = useContext(ContextProvider);

	const handleViewMorePlaylists = () => {
		setViewMorePlaylists(!viewMorePlaylists);
	};

	const handleViewMoreChannels = () => {
		setViewMoreChannels(!viewMoreChannels);
	};

	return (
		<Container
			height="100vh"
			justify="space-between"
			className="sidebar"
			dir="column"
			style={{ marginTop: "4rem" }}
		>
			<div
				className="sidebar-section"
			>
				<div className="sidebar-item active">
					<AiFillHome className="sidebar-icon" />
					<p className="text-hidded">Início</p>
				</div>
				<div className="sidebar-item">
					<img
						style={{ maxHeight: "1.5em", color: "white" }}
						src={shortsIcon}
						alt=""
					/>
					<p className="text-hidded">Shorts</p>
				</div>
				<div className="sidebar-item">
					<MdOutlineSubscriptions className="sidebar-icon" />
					<p className="text-hidded">Inscrições</p>
				</div>
			</div>
			<div className="sidebar-section">
				<div className="sidebar-item ">
					<MdOutlineVideoLibrary className="sidebar-icon" />
					<p className="text-hidded">Biblioteca</p>
				</div>
				<div className="sidebar-item">
					<VscHistory className="sidebar-icon" />
					<p className="text-hidded">Histórico</p>
				</div>
				<div className="sidebar-item">
					<RiMovieLine className="sidebar-icon" />
					<p className="text-hidded">Seus vídeos</p>
				</div>
				<div className="sidebar-item">
					<MdOutlineWatchLater className="sidebar-icon" />
					<p className="text-hidded">Assistir mais tarde</p>
				</div>
				<div className="sidebar-item">
					<FiScissors className="sidebar-icon" />
					<p className="text-hidded">Seus clipes</p>
				</div>
				<div
					onClick={handleViewMorePlaylists}
					className="sidebar-item"
				>
					{viewMorePlaylists ? (
						<>
							<BiChevronUp className="sidebar-icon" />
							<p className="text-hidded">Mostrar menos</p>
						</>
					) : (
						<>
							<MdOutlineExpandMore className="sidebar-icon" />
							<p className="text-hidded">Mostrar mais</p>
						</>
					)}
				</div>
			</div>
			{viewMorePlaylists && (
				<div
					style={{ transition: "1s linear ease-in" }}
					className="sidebar-section"
				>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						ESTUDAR
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						Trap Nacional 2023
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						Sertanejo 2023
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						Formação Front End
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						ESTUDAR
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						Trap Nacional 2023
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						Sertanejo 2023
					</div>
					<div className="sidebar-item">
						<CgPlayList className="sidebar-icon" />
						Formação Front End
					</div>
				</div>
			)}
			<div className="sidebar-section">
				<SectionTitle>Inscrições </SectionTitle>
				{channelsSubscribed &&
					channelsSubscribed.map((sub, index) => (
						<Container
							key={index}
							gap="10px"
							className="sidebar_channel "
						>
							<PhotoUser backgroundPhoto={sub.photo_url} />
							<div className="channel-name">{sub.name}</div>
						</Container>
					))}
				{viewMoreChannels ? (
					""
				) : (
					<>
						<Container
							onClick={handleViewMoreChannels}
							gap="10px"
							className="sidebar_channel "
						>
							<MdOutlineExpandMore className="sidebar-icon" />
							<div>Mostrar mais 3</div>
						</Container>
					</>
				)}
				{viewMoreChannels && (
					<>
						<Container gap="10px" className="sidebar_channel ">
							<PhotoUser backgroundPhoto="https://i.pinimg.com/200x150/ba/b1/28/bab12809a4bff8ab38cd667a5b8a5eb7.jpg" />
							<div className="channel-name">Kayblack</div>
						</Container>
						<Container gap="10px" className="sidebar_channel ">
							<PhotoUser backgroundPhoto="https://mir-s3-cdn-cf.behance.net/projects/404/b1b5ef107227113.Y3JvcCw4OTgsNzAzLDE2MCw0MDQ.png" />
							<div className="channel-name">Matuê</div>
						</Container>
						<Container gap="10px" className="sidebar_channel ">
							<PhotoUser backgroundPhoto="https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/casimiro-miguel-direitos-de-transmissao-sbt-tnt-sports-divulgacao-grande_fixed_large.jpg" />
							<div className="channel-name">Casimiro</div>
						</Container>
						<Container
							onClick={handleViewMoreChannels}
							gap="10px"
							className="sidebar_channel "
						>
							<BiChevronUp className="sidebar-icon" />
							<div>Mostrar menos</div>
						</Container>
					</>
				)}
			</div>
			<div className="sidebar-section">
				<SectionTitle>Explorar </SectionTitle>
				<div>
					<BsFire className="sidebar-icon" />
					<p className="text-hidded">Em alta</p>
				</div>
				<div>
					<RiShoppingBag2Line className="sidebar-icon" />
					<p className="text-hidded">Shopping</p>
				</div>
				<div>
					<BsMusicNote className="sidebar-icon" />
					<p className="text-hidded">Música</p>
				</div>
				<div>
					<GiClapperboard className="sidebar-icon" />
					<p className="text-hidded">Filmes e programas</p>
				</div>
				<div>
					<MdOutlineWifiTethering className="sidebar-icon" />
					<p className="text-hidded">Ao vivo</p>
				</div>
				<div>
					<CgGames className="sidebar-icon" />
					<p className="text-hidded">Jogos</p>
				</div>
				<div>
					<MdNewspaper className="sidebar-icon" />
					<p className="text-hidded">Notícias</p>
				</div>
				<div>
					<BsTrophy className="sidebar-icon" />
					<p className="text-hidded">Esportes</p>
				</div>
				<div>
					<BsLightbulb className="sidebar-icon" />
					<p className="text-hidded">Aprender</p>
				</div>
			</div>
			<div className="sidebar-section">
				<SectionTitle>Mais do Youtube </SectionTitle>
				<div>
					<BsYoutube className="sidebar-icon" />
					<p className="text-hidded">Youtube Premium</p>
				</div>
				<div>
					<SiYoutubestudio className="sidebar-icon" />
					<p className="text-hidded">Youtube Studio</p>
				</div>
				<div>
					<SiYoutubemusic className="sidebar-icon" />
					<p className="text-hidded">Youtube Music</p>
				</div>
				<div>
					<TbBrandYoutubeKids className="sidebar-icon" />
					<p className="text-hidded">Youtube Kids</p>
				</div>
			</div>
			<div className="sidebar-section">
				<div>
					<RxGear className="sidebar-icon" />
					<p className="text-hidded">Configurações</p>
				</div>
				<div>
					<FiFlag className="sidebar-icon" />
					<p className="text-hidded">Histórico de denúncias</p>
				</div>
				<div>
					<IoIosHelpCircleOutline className="sidebar-icon" />
					<p className="text-hidded">Ajuda</p>
				</div>
				<div>
					<MdOutlineFeedback className="sidebar-icon" />
					<p className="text-hidded">Enviar feedback</p>
				</div>
			</div>
		</Container>
	);
};

export default Sidebar;
