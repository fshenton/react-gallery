import React, { Component } from "react";
import { s } from "./";

export default class Carousel extends Component {
	render(){
		return (
			<output className={s.carousel}>
				<img src="https://cache.escapistmagazine.com/2019/06/25164753/Cyberpunk-2077-eating-768x432.jpg" alt="cyberpunk 2077 promo image"/>
			</output>
		);
	}
}