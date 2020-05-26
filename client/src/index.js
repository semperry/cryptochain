import React from "react";
import { render } from "react-dom";
import { Router, Switch, Route } from "react-router-dom";

import App from "./components/App";
import "./index.css";
import history from "./history";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";

render(
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/blocks" component={Blocks} />
			<Route path="/conduct-transaction" component={ConductTransaction} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
