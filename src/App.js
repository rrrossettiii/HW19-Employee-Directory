// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages;
import Directory from "./pages/Directory";

// Components;

import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<Directory />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
