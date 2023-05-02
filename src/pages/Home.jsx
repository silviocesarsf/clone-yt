import React, { useContext } from "react";
import { Section } from "../styles/Section/Section";
import Sidebar from "../components/Sidebar/Sidebar";
import Carrousel from "../components/Carrousel/Carrousel";
import CardVideo from "../components/Card/CardVideo";
import "./styles.css";
import { ContextProvider } from "../context/Context";

const Home = () => {
	const { videosRecommended } = useContext(ContextProvider);

	return (
		<Section>
			<Sidebar />
			<Carrousel />
			<div className="grid-videos">
				{videosRecommended &&
					videosRecommended.map((video) => (
						<CardVideo
							key={video.id}
							title={video.title}
							channel={video.channel}
							duration={video.duration}
							views={video.views}
							date={video.date_published}
							verified={video.verified}
							thumbnail={video.thumbnail}
							watched={video.watched}
							photo={video.photo_url}
						/>
					))}
			</div>
		</Section>
	);
};

export default Home;
