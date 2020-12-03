import React from "react";
import "./style.css";

// Components;
// ============:
import { Card } from "react-bootstrap";

function UserCard({ user }) {
	return (
		<Card style={{ width: "15rem" }}>
			<Card.Img variant="top" src={user.image} />
			<Card.Body>
				<Card.Title>
					{user.name} <small>Age: {user.age}</small>{" "}
				</Card.Title>
				<Card.Text>
					{user.location}
					<br />
					Username: {user.username}
					<br />
					Mobile: {user.phone}
					<br />
					Email: {user.email}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserCard;
