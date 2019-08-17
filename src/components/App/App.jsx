import React, { Component } from "react";
import Gallery from "COMPONENTS/Gallery/";
import { s } from "./";

export default class App extends Component {
	render(){
		return (
			<div className={s.appWrapper}>
				<Gallery/>
			</div>
		);
	}
}