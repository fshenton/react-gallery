import { s } from "./";
import React, { Component } from "react";
import Carousel from "COMPONENTS/Carousel/";
import ThumbnailSet from "COMPONENTS/ThumbnailSet/";

export default class Gallery extends Component {
	constructor(){
		super();

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

	render(){

		const {
			activeImageIndex: index
		} = this.state;

		const {
			src: activeSrc,
			alt: activeAlt
		} = this.images[index];

		return (
			<form className={ s.gallery }>
				<Carousel 
					src={activeSrc}
					alt={activeAlt}
				/>
				<ThumbnailSet />
			</form>
		);
	}
}