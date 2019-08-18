import React, { Component } from "react";
import { s } from "./";

export default class Thumbnail extends Component {
	render(){
		return (
			<div className={s.thumbnail}>
				<input 
					className={s.radio} 
					type="radio" 
				/>
				<img 
					className={s.image} 
					src="" 
					alt="" 
				/>
			</div>
		);
	}
}