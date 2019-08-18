import React, { Component } from "react";
import { s } from "./";

export default class Thumbnail extends Component {
	render(){
		const {
			src,
			alt
		} = this.props;

		return (
			<li className={s.thumbnail}>
				<input 
					className={s.radio} 
					type="radio" 
				/>
				<img 
					className={s.image} 
					src={src} 
					alt={alt}
				/>
			</li>
		);
	}
}