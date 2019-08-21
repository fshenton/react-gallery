import React, { Component } from "react";
import { s } from "./";
import Thumbnail from "COMPONENTS/Thumbnail/";

export default class ThumbnailSet extends Component {
	constructor(props){
		super(props);

		this.generateThumbnails = this.generateThumbnails.bind(this);
		this.thumbSelected = this.thumbSelected.bind(this);
	}

	generateThumbnails(imageSet, activeIndex){
		const numImages = imageSet.length;
		const thumbArray = [];

		//checked being set by activeIndex allows for prev/next button to also sync with thumbs

		for(let i = 0; i < numImages; i++){
			thumbArray.push(
				<Thumbnail 
					src= {imageSet[i].src}
					alt= {imageSet[i].alt}
					key= {`thumbnail${i}`}
					index= {i}
					callback= {this.thumbSelected}
					checked= {i === activeIndex ? true : false}
				/>
			);
		}

		return thumbArray;
	}

	thumbSelected(index){
		const {
			changeActiveIndex
		} = this.props;
		
		changeActiveIndex(index);
	}

	render(){
		const {
			imageSet,
			activeIndex
		} = this.props;

		const thumbs = this.generateThumbnails(imageSet, activeIndex);

		return(
			<fieldset className={s.thumbnailSet}>
				<ul className={s.thumbs}> 	
					{thumbs}
				</ul>
			</fieldset>
		);
	}
}