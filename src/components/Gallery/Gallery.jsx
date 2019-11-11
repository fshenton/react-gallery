import { s } from "./";
import React, { Component } from "react";
import Carousel from "COMPONENTS/Carousel/";
import ThumbnailSet from "COMPONENTS/ThumbnailSet/";

export default class Gallery extends Component {
	constructor(){
		super();

		this.updateActiveIndex = this.updateActiveIndex.bind(this);

		//SPECIFYING IMAGES TO USE

		//UNCOMMENT TO USE IMAGES FROM FILMS
		// this.images = [	
		// 	{
		// 		src: "./assets/2d/primary-images/exmachina.jpg", 
		// 		alt: "Image from Ex Machina."
		// 	}, {
		// 		src: "./assets/2d/primary-images/godfather.jpg", 
		// 		alt: "Image from Godfather."
		// 	}, {
		// 		src: "./assets/2d/primary-images/leon.jpg", 
		// 		alt: "Image from Leon."
		// 	}, {
		// 		src: "./assets/2d/primary-images/raw.jpg", 
		// 		alt: "Image from Raw."
		// 	}, {
		// 		src: "./assets/2d/primary-images/terminator.jpg", 
		// 		alt: "Image from Terminator."
		// 	}, {
		// 		src: "./assets/2d/primary-images/thehandmaiden.jpg", 
		// 		alt: "Image from Handmaiden."
		// 	}, {
		// 		src: "./assets/2d/primary-images/undertheskin.jpg",
		// 		alt: "Image from Under the Skin."
		// 	}
		// ];

		//UNCOMMENT TO USE ILLUSTRATED IMAGES
		this.images = [	
			{
				src: "./assets/2d/alt-images/pinksunset.png", 
				alt: "Illustrated image showing a stunning pink sunset."
			}, {
				src: "./assets/2d/alt-images/moodypinksunset.png", 
				alt: "Illustrated image showing a moody pink sunset."
			}, {
				src: "./assets/2d/alt-images/pinkcityscape.png", 
				alt: "Illustrated image showing a dramatic 80s cityscape."
			}, {
				src: "./assets/2d/alt-images/ghostintheshell.png", 
				alt: "Illustrated image from Ghost in the Shell."
			}, {
				src: "./assets/2d/alt-images/lavapinktree.png", 
				alt: "Illustrated image showing flowing lava and a pink blossom tree."
			}, {
				src: "./assets/2d/alt-images/asiancityscape.png", 
				alt: "Illustrated image showing the beauty found in a poor, asian neighbourhood."
			}, {
				src: "./assets/2d/alt-images/pinkmountain.png",
				alt: "Illustrated image showing a beautiful landscape containing the moon and a pink mountain."
			}, {
				src: "./assets/2d/alt-images/astronaut.png",
				alt: "Illustrated image showing an astronaut with the weight of a planet on their back."
			}
		];

		this.state = {
			activeImageIndex: 0,
		};
	}

	updateActiveIndex(newIndex){
		this.setState({
			activeImageIndex: newIndex
		});
	}

	render(){
		const {
			activeImageIndex: index
		} = this.state;

		const {
			images
		} = this;

		return (
			<form className={s.gallery}>
				<Carousel 
					imageSet={images}
					activeIndex={index}
					changeActiveIndex={this.updateActiveIndex}
				/>
				<ThumbnailSet 
					imageSet={images} 
					activeIndex={index}
					changeActiveIndex={this.updateActiveIndex}
				/>
			</form>
		);
	}
}
