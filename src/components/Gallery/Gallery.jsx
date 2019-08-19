import { s } from "./";
import React, { Component } from "react";
import Carousel from "COMPONENTS/Carousel/";
import ThumbnailSet from "COMPONENTS/ThumbnailSet/";

export default class Gallery extends Component {
	constructor(){
		super();

		this.updateActiveIndex = this.updateActiveIndex.bind(this);

		//SPECIFYING IMAGES TO USE
		this.images = [	
			{
				src: "./assets/2d/exmachina.jpg", 
				alt: "Ex Machina"
			}, {
				src: "./assets/2d/godfather.jpg", 
				alt: "Godfather"
			}, {
				src: "./assets/2d/leon.jpg", 
				alt: "Leon"
			}, {
				src: "./assets/2d/raw.jpg", 
				alt: "Raw"
			}, {
				src: "./assets/2d/terminator.jpg", 
				alt: "Terminator"
			}, {
				src: "./assets/2d/thehandmaiden.jpg", 
				alt: "Handmaiden"
			}, {
				src: "./assets/2d/undertheskin.jpg",
				alt: "Under the Skin"
			}
		];

		this.state = {
			activeImageIndex: 0,
		};
	}

	updateActiveIndex(newIndex){
		console.log("update request received");
		console.log(newIndex);

		this.setState({
			activeImageIndex: newIndex
		});
	}

	render(){
		const {
			activeImageIndex: index
		} = this.state;

		const {
			src: activeSrc,
			alt: activeAlt
		} = this.images[index];

		const {
			images
		} = this;

		const imageNum = images.length;

		return (
			<form className={s.gallery}>
				<Carousel 
					src={activeSrc}
					alt={activeAlt}
					activeIndex={index}
					changeActiveIndex={this.updateActiveIndex}
					imageCount={imageNum}
				/>
				<ThumbnailSet imageSet={images} />
			</form>
		);
	}
}