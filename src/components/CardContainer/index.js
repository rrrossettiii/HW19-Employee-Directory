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
	const { sortedEmployeeState } = useContext(DirectoryContext);
	const Cards = sortedEmployeeState.employeeList.map((user, index) => (
		<UserCard key={index} user={user} />
	));
	return (
		<div>
			<Container fluid>
				<Row>{Cards}</Row>
			</Container>
		</div>
	);
}

export default CardContainer;
