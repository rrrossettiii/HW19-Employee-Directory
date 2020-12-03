// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages;
import Directory from "./pages/Directory";

// Components;
import { Navbar } from "react-bootstrap";

function App() {
	return (
		<Router>
			<div>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand>Staff Index</Navbar.Brand>
				</Navbar>
				<Directory />
			</div>
		</Router>
	);
}

export default App;
