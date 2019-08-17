import React, { Component } from "react";
import { s } from "./";

export default class Thumbnail extends Component {
	render(){
		return (
			<input className={s.thumbnail} type="radio"/>
		);
	}
}