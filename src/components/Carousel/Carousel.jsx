import React, { Component } from "react";
import { s } from "./";
import CarouselImage from "COMPONENTS/CarouselImage/";

export default class Carousel extends Component {
	render(){
		return (
			<output className={s.carousel}>
				<CarouselImage />
			</output>
		);
	}
}