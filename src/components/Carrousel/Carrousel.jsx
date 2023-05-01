import React from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";

const Carrousel = () => {
	return (
		<Container justify="left" className="carrousel">
			<span className="carrousel-item carousel-active">Tudo</span>
			<span className="carrousel-item">Jogos</span>
			<span className="carrousel-item">Javascript</span>
			<span className="carrousel-item">Valorant</span>
			<span className="carrousel-item">Música</span>
			<span className="carrousel-item">Mixes</span>
			<span className="carrousel-item">Ao vivo</span>
			<span className="carrousel-item">Rich the Kid</span>
			<span className="carrousel-item">Computadores</span>
			<span className="carrousel-item">League of Legends</span>
			<span className="carrousel-item">Freestyle Rap</span>
			<span className="carrousel-item">Counter-Strike</span>
			<span className="carrousel-item">Podcast</span>
			<span className="carrousel-item">Pássaros</span>
			<span className="carrousel-item">Stephen Curry</span>
			<span className="carrousel-item">Teclado</span>
			<span className="carrousel-item">Unboxings</span>
			<span className="carrousel-item">Hip hop brasileiro</span>
			<span className="carrousel-item">Enviados recentemente</span>
			<span className="carrousel-item">Assistidos</span>
			<span className="carrousel-item">Novidades para você</span>
		</Container>
	);
};

export default Carrousel;
