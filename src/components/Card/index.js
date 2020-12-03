import React from "react";
import "./style.css";

function Card({ user }) {
	return (
		<div className="col-md-3">
			<div>
				<h2>{user.name}</h2>
				<div>
					<img className="card-img" src={user.image} alt="User Image" />
				</div>
				<p>{user.location}</p>
				<p>Username: {user.username}</p>
				<p>Age: {user.age}</p>
				<p>Mobile: {user.phone}</p>
				<p>Email: {user.email}</p>
			</div>
		</div>
	);
}

export default Card;
