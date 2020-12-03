import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Context;
// =============:
import DirectoryContext from "../utils/DirectoryContext";

// Components;
import Container from "../components/Container";
import CardContainer from "../components/CardContainer";

function Directory() {
	const [sortedState, setSortedState] = useState({
		employeeList: []
	});

	useEffect(() => {
		console.log("running effect");
		loadEmployees();
	}, []);

	function sortByAge() {
		const byAge = sortedState.employeeList.sort((a, b) => {
			return a.dob.age - b.dob.age;
		});
		setSortedState({ employeeList: byAge });
	}

	function loadEmployees() {
		API.fetchEmployees()
			.then(users => {
				setSortedState({ employeeList: users });
			})

			.catch(err => console.log(err));
	}

	return (
		<DirectoryContext.Provider value={sortedState}>
			<div>
				<Container>
					<CardContainer />
				</Container>
			</div>
		</DirectoryContext.Provider>
	);
}

export default Directory;
