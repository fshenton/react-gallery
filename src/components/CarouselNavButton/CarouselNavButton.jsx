import React, { Component } from "react";
import { s } from "./";

export default class CarouselNavButton extends Component {
	render(){
		const navDir = this.props.direction;
		
		const dirClass = 
			navDir === "prev" 
			? s.prev 
			: s.next;

		return (
			<button 
				className={`${s.carouselNavButton} ${dirClass}`}
				onClick={(e) => e.preventDefault()}
			>
				{navDir} 
			</button>
		);
	}
}