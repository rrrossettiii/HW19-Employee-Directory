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
					<p>{user.location}</p>
					<p></p>
					<p>Username: {user.username}</p>
					<p>Mobile: {user.phone}</p>
					<p>Email: {user.email}</p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserCard;
