import React, { Component } from "react";
import { s } from "./";

export default class Thumbnail extends Component {
	constructor(){
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		console.log("handling click");

		const {
			callback,
			index
		} = this.props;

		//flag to thumbnailset which thumbnail has been selected
		callback(index);
	}

	render(){
		const {
			src,
			alt,
			index,
			defaultChecked
		} = this.props;

		const inputId = `thumbnail${index}`;

		return (
			<li className={s.thumbnail}>
				<input
					className={s.radio} 
					type="radio" 
					name="thumbnails"
					id={inputId}
					onClick={this.handleClick}
					defaultChecked={defaultChecked}
				/>
				<label className={s.label} htmlFor={inputId}>
					<img 
						className={s.image} 
						src={src} 
						alt={alt}
					/>
				</label>
			</li>
		);
	}
}