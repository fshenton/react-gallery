import React, { Component } from "react";
import { s } from "./";
import Thumbnail from "COMPONENTS/Thumbnail/";

export default class ThumbnailSet extends Component {
	constructor(props){
		super(props);

		this.generateThumbnails = this.generateThumbnails.bind(this);

		const {
			imageSet
		} = this.props;

		const imageCount = imageSet.length; 
		this.thumbnails = this.generateThumbnails(imageSet, imageCount);
	}

	generateThumbnails(set, count){
		let thumbs = new Array(count);

		for(let i = 0; i < count; i++){	
			const {
				src : thumbSrc,
				alt : thumbAlt
			} = set[i];

			const thumb = React.createElement(
				Thumbnail, {
				src: thumbSrc, 
				alt: thumbAlt,
				key: `thumbnail${i}`
			});

			thumbs.push(thumb);
		}

		return thumbs;
	}

	render(){
		const {
			imageSet
		} = this.props;

		const images = imageSet.length;

		return(
			<fieldset className={s.thumbnailSet}>
				<ul className={s.thumbs}> 	
					{this.thumbnails}
				</ul>
			</fieldset>
		);
	}
}