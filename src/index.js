import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";

import bg from "./bg.svg";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

injectGlobal`
	* {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}
	html {
		background: #f1f1f1;
    background-color: #ffe7d1;
    background-image: url(${bg});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
	}
`;
