import React, { Component } from "react";
import { s } from "./";

export default class CarouselNavButton extends Component {
	render(){
		return (
			<button className={s.carouselNavButton} onClick={(e) => e.preventDefault()}>
				BUTTON
			</button>
		);
	}
}