import React, { Component } from "react";
import { s } from "./";
import Thumbnail from "COMPONENTS/Thumbnail/";

export default class ThumbnailSet extends Component {
	render(){
		const {
			imageSet
		} = this.props;

		return(
			<fieldset className={s.thumbnailSet}>
				<div className={s.thumbs}> 
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />
					<Thumbnail />					
				</div>
			</fieldset>
		);
	}
}