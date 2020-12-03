import React from "react";
import "./style.css";

// Components;
// ==============:
import UserCard from "../UserCard";
import { Container, Row } from "react-bootstrap";

// Context;
// =============:
import { useContext } from "react";
import DirectoryContext from "../../utils/DirectoryContext";

// Loops through 'employeeList' and creates a card for each entry;
function CardContainer() {
	const { employeeList } = useContext(DirectoryContext);
	const cards = employeeList.map((user, index) => (
		<UserCard key={index} user={user} />
	));
	console.log("card container", cards);
	return (
		<div className="jumbotron card-container">
			<Container fluid>
				<Row>{cards}</Row>
			</Container>
		</div>
	);
}

export default CardContainer;
