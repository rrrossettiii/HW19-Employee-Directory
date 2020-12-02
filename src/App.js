// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages;
import Directory from "./pages/Directory";

// Components;
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Wrapper>
					<Directory />
				</Wrapper>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
