import React, { Component } from "react";
import { s } from "./";

export default class ThumbnailSet extends Component {
	render(){
		return(
			<fieldset className={s.thumbnailSet}>
				<p>ThumbnailSet</p>
			</fieldset>
		);
	}
}