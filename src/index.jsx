import React from "react";
import ReactDOM from "react-dom";
import "SHARED/reset.scss";
import "SHARED/global.scss";
import App from "COMPONENTS/App/";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<App />,
		document.getElementById("app")
	);
}
