import { s } from "./";
import React, { Component } from "react";
import Carousel from "COMPONENTS/Carousel/";

export default class Gallery extends Component {
	render(){
		return (
			<form className="s.gallery">
				<Carousel />
			</form>
		);
	}
}