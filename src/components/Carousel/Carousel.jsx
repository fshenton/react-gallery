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
		this.generateCarouselImages = this.generateCarouselImages.bind(this);
	}

	requestNewImage(increment, e){
		e.preventDefault();

		const {
			changeActiveIndex,
			activeIndex,
			imageSet
		} = this.props;

		const imageCount = imageSet.length;
		
		let newIndex = activeIndex + increment; //-1 for prev, +1 for next 
		if(newIndex < 0){
			newIndex = imageCount-1
		}
		else newIndex = newIndex%imageCount;

		//tell parent to update the active index
		changeActiveIndex(newIndex);
	}

	generateCarouselImages(){
		const {
			imageSet,
			activeIndex
		} = this.props;

		const {
			src,
			alt
		} = imageSet[activeIndex];

		const numImages = imageSet.length;

		const hiddenClass = s.hiddenImageEl; //opacity = 0
		const activeClass = s.activeImageEl; //opacity = 1

		const imagesArray = [];
		for(let i = 0; i < numImages; i++){
			const {
				src,
				alt
			} = imageSet[i];

			//if image is the active image, we want to make it visible
			const imageClass = i === activeIndex ? activeClass : hiddenClass;

			imagesArray.push(
				<div className={`${imageClass} ${s.imageEl}`} key={`CarouselElement${i}`}>
					<CarouselBackgroundImage 
						src={src} 
					/>
					<CarouselImage
						src={src} 
						alt={alt} 
					/>
				</div>
			);
		}

		return imagesArray;

	}

	render(){

		const carouselImages = this.generateCarouselImages();

		return (
			<output className={s.carousel}>
				{carouselImages}
				<CarouselNavButton callback={this.requestPrevImage} direction="prev" />
				<CarouselNavButton callback={this.requestNextImage} direction="next" />
			</output>
		);
	}
}