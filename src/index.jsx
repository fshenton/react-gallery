import React from "react";
import ReactDOM from "react-dom";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<p>Hello World</p>,
		document.getElementById("app")
	);
}