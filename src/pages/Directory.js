import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Context;
// =============:
import DirectoryContext from "../utils/DirectoryContext";

// Components;
import NavBar from "../components/NavBar";
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
			return a.age - b.age;
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
		<DirectoryContext.Provider value={{ sortedState, sortByAge }}>
			<NavBar />
			<div>
				<CardContainer />
			</div>
		</DirectoryContext.Provider>
	);
}

export default Directory;
