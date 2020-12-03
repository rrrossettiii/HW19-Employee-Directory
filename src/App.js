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
				<Navbar className="justify-content-center" bg="dark" variant="dark">
					<Navbar.Brand>Staff Index</Navbar.Brand>
				</Navbar>
				<Directory />
				<Navbar
					className="justify-content-end footer"
					bg="light"
					variant="light"
				>
					<Navbar.Brand>
						<span>Staff Index {new Date().getFullYear()}</span>
					</Navbar.Brand>
				</Navbar>
			</div>
		</Router>
	);
}

export default App;
