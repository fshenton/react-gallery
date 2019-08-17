import React, { Component } from "react";
import { s } from "./";

export default class App extends Component {
	render(){
		return (
			<div className={s.appWrapper}>
				<p>Hello World</p>
			</div>
		);
	}
}