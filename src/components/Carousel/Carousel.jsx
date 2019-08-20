import React, { Component } from "react";
import { s } from "./";
import CarouselBackgroundImage from "COMPONENTS/CarouselBackgroundImage/";
import CarouselImage from "COMPONENTS/CarouselImage/";
import CarouselNavButton from "COMPONENTS/CarouselNavButton/";

export default class Carousel extends Component {
	constructor(props){
		super(props);

		//FUNCTION BINDING
		this.requestPrevImage = this.requestNewImage.bind(this, -1);
		this.requestNextImage = this.requestNewImage.bind(this, 1);
	}

	requestNewImage(increment, e){
		e.preventDefault();

		const {
			changeActiveIndex,
			activeIndex,
			imageCount
		} = this.props;

		//-1 for prev, +1 for next 
		let newIndex = activeIndex + increment;

		//wrap to 0 or last index of image array
		if(newIndex < 0){
			newIndex = imageCount-1
		}
		else newIndex = newIndex%imageCount;

		//tell parent to update the active index
		changeActiveIndex(newIndex);
	}

	render(){
		const {
			src, 
			alt
		} = this.props;

		return (
			<output className={s.carousel}>
				<CarouselBackgroundImage src={src} />
				<CarouselImage src={src} alt={alt} />
				<CarouselNavButton callback={this.requestPrevImage} direction="prev" />
				<CarouselNavButton callback={this.requestNextImage} direction="next" />
			</output>
		);
	}
}