import React from "react";
import { Section } from "../styles/Section/Section";
import Sidebar from "../components/Sidebar/Sidebar";
import Carrousel from "../components/Carrousel/Carrousel";
import CardVideo from "../components/Card/CardVideo";
import "./styles.css"

const Home = () => {
	return (
		<Section>
			<Sidebar />
			<Carrousel />
			<div className="grid-videos">
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
				<CardVideo />
			</div>
		</Section>
	);
};

export default Home;
