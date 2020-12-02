import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Components;
import Container from "../components/Container";

function Directory() {
	const [sortedState, setSortedState] = useState({
		employeeList: []
	});

	useEffect(() => {
		loadEmployees();
	}, []);

    function sortByAge ()

	function loadEmployees() {
		API.fetchUsers()
			.then(users => {
				console.log(users);
			})

			.catch(err => console.log(err));
	}

	return (
		<div>
			<Container></Container>
		</div>
	);
}

export default Directory;
