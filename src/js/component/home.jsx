import React from "react";
import Anuncio from './Anuncio';
import BotonReinicio from './BotonReinicio';
import Posision from './Posision';

//include images into your bundle

//create your first component
const Home = () => {
	constructor()
	super();
	this.state = {
		gameBoard:[
			' ', ' ', ' ',
			' ', ' ', ' ',
			' ', ' ', ' ',
		]
	}	
	
	
	return (
	<>
	<div className="container">
		<div className="menu">
			<h1>Juego: Gato</h1>
			<Anuncio></Anuncio>
			<BotonReinicio></BotonReinicio>
		</div>
		{this.state.gameBoard.map(function(value, i){
			<Posision></Posision>
		})}
	</div>
	
	
	</>
	);
};

export default Home;
