import React, { Component } from "react";
import { s } from "./";

export default class CarouselBackgroundImage extends Component {
	render(){
		const {
			src
		} = this.props;

		const divStyle = {
			backgroundImage: `url(${src})`
		}

		return (
			<div 
				className={s.bgImage}
				style={divStyle}
			>
			</div>
		);
	}
}
