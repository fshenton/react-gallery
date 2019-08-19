import React, { Component } from "react";
import { s } from "./";

export default class CarouselNavButton extends Component {
	render(){
		const navDir = this.props.direction;
		
		const dirClass = 
			navDir === "prev" 
			? s.prev 
			: s.next;

		const {
			callback
		} = this.props;

		return (
			<button 
				className={`${s.carouselNavButton} ${dirClass}`}
				onClick={(e) => callback(e, navDir)}
			>
				{navDir} 
			</button>
		);
	}
}