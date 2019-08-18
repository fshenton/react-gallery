import { s } from "./";
import React, { Component } from "react";
import Carousel from "COMPONENTS/Carousel/";
import ThumbnailSet from "COMPONENTS/ThumbnailSet/";

export default class Gallery extends Component {
	render(){
		return (
			<form className={ s.gallery }>
				<Carousel />
				<ThumbnailSet />
			</form>
		);
	}
}