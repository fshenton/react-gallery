import React, { Component } from "react";
import { s } from "./";
import Thumbnail from "COMPONENTS/Thumbnail/";

export default class ThumbnailSet extends Component {
	render(){
		return(
			<fieldset className={s.thumbnailSet}>
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
			</fieldset>
		);
	}
}