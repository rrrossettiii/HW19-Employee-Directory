import React from "react";
import Card from "../Card";
import "./style.css";

// Context;
// =============:
import { useContext } from "react";
import DirectoryContext from "../../utils/DirectoryContext";

// Loops through 'employeeList' and creates a card for each entry;
function CardContainer() {
	const { employeeList } = useContext(DirectoryContext);
	const cards = employeeList.map((user, index) => (
		<Card key={index} user={user} />
	));
	console.log("card container", cards);
	return <div className="jumbotron card-container">{cards}</div>;
}

export default CardContainer;
