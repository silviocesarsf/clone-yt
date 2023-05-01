import React from "react";
import { Container } from "../../styles/Container/Container";
import { PhotoUser } from "../../styles/PhotoUser/PhotoUser";
import thumb from "../../assets/thumbnail-caze.jpg";

import "./styles.css";
const CardVideo = () => {
	return (
		<Container
			dir="column"
			justify="space-between"
			width="320px"
			className="video-card"
		>
			<div className="video-image">
				<img src={thumb} alt="Casimiro" />
			</div>
			<span className="video-duration">2:38:25</span>
			<Container
				align="flex-start"
				width="100%"
				justify="space-between"
				className="description-video"
			>
				<PhotoUser height="35px" width="35px" />
				<Container className="infos-video" dir="column">
					<a className="video-title">Papai voltou COMEDIAS</a>
					<a href="#" className="video-channel">
						ZackSB
					</a>
					<Container gap="5px">
						<div className="video-views">
							450 Visualizações{" "}
						</div>
						•<div className="video-date">Há 2 semanas</div>
					</Container>
				</Container>
			</Container>
		</Container>
	);
};

export default CardVideo;
