import React, { useState } from "react";
import { Container } from "../../styles/Container/Container";
import { PhotoUser } from "../../styles/PhotoUser/PhotoUser";
import thumb from "../../assets/thumbnail-caze.jpg";
import { GoVerified } from "react-icons/go";

import "./styles.css";
const CardVideo = ({
	title,
	channel,
	duration,
	views,
	date,
	verified,
	thumbnail,
	watched,
}) => {
	return (
		<Container
			dir="column"
			justify="space-between"
			width="340px"
			className="video-card"
		>
			<div className="video-image">
				<img
					style={{
						borderBottom: watched ? "5px solid red" : "",
					}}
					src={thumbnail}
					alt="Casimiro"
				/>
			</div>
			<span className="video-duration">{duration}</span>
			<Container
				align="flex-start"
				width="100%"
				justify="space-between"
				className="description-video"
			>
				<PhotoUser height="35px" width="35px" />
				<Container className="infos-video" dir="column">
					<a className="video-title">
						{title.length > 42
							? `${title.slice(title, 42)}...`
							: title}
					</a>
					<a href="#" className="video-channel">
						{channel}
						{verified && <GoVerified />}
					</a>
					<Container justify="left" width="100%" gap="6px">
						<div className="video-views">{views} -</div>
						<div className="video-date">{date}</div>
					</Container>
				</Container>
			</Container>
		</Container>
	);
};

export default CardVideo;
