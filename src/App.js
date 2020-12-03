// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages;
import Directory from "./pages/Directory";

// Components;
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Directory />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
