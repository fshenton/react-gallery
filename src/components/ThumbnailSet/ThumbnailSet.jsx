import React, { Component } from "react";
import { s } from "./";
import Thumbnail from "COMPONENTS/Thumbnail/";

export default class ThumbnailSet extends Component {
	constructor(props){
		super(props);

		this.generateThumbnails = this.generateThumbnails.bind(this);
		this.updateSelectedThumb = this.updateSelectedThumb.bind(this);

		const {
			imageSet,
		} = this.props;

		//populate the thumbnails based on the images passed from parent
		const imageCount = imageSet.length; 
		this.thumbnails = this.generateThumbnails(imageSet, imageCount);
	}

	generateThumbnails(set, count){
		let thumbs = [];

		for(let i = 0; i < count; i++){	
			const {
				src : thumbSrc,
				alt : thumbAlt
			} = set[i];

			const thumb = React.createElement(
				Thumbnail, {
				src: thumbSrc, 
				alt: thumbAlt,
				key: `thumbnail${i}`,
				index: i,
				callback: this.updateSelectedThumb
			});

			thumbs.push(thumb);
		}

		return thumbs;
	}

	updateSelectedThumb(index){
		console.log("thumb index selected", index);

		const {
			changeActiveIndex
		} = this.props;
		
		changeActiveIndex(index);
	}

	render(){
		const {
			imageSet
		} = this.props;

		return(
			<fieldset className={s.thumbnailSet}>
				<ul className={s.thumbs}> 	
					{this.thumbnails}
				</ul>
			</fieldset>
		);
	}
}