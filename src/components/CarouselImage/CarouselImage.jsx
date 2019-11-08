import React, { Component } from "react";
import { s } from "./";

export default class CarouselImage extends Component {
	render(){
		const {
			src,
			alt
		} = this.props;

		return (
			<img className={s.carouselImage} src={src} alt={alt} />
		);
	}
}
