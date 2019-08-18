import React, { Component } from "react";
import { s } from "./";
import CarouselImage from "COMPONENTS/CarouselImage/";
import CarouselNavButton from "COMPONENTS/CarouselNavButton/";

export default class Carousel extends Component {
	render(){
		const {
			src, 
			alt
		} = this.props;

		return (
			<output className={s.carousel}>
				<CarouselImage src={src} alt={alt} />
				<CarouselNavButton direction="prev" />
				<CarouselNavButton direction="next" />
			</output>
		);
	}
}