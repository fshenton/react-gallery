import React, { Component } from "react";
import { s } from "./";
import CarouselImage from "COMPONENTS/CarouselImage/";
import CarouselNavButton from "COMPONENTS/CarouselNavButton/";

export default class Carousel extends Component {
	render(){
		return (
			<output className={s.carousel}>
				<CarouselImage />
				<CarouselNavButton />
				<CarouselNavButton />
			</output>
		);
	}
}