import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Context;
// =============:
import DirectoryContext from "../utils/DirectoryContext";

// Components;
import NavBar from "../components/NavBar";
import CardContainer from "../components/CardContainer";

function Directory() {
	const yourEmployees = JSON.parse(localStorage.getItem("EmployeeList"));
	const [sortedState, setSortedState] = useState({
		employeeList: []
	});

	useEffect(() => {
		console.log("running effect");
		if (yourEmployees) {
			setSortedState({ employeeList: yourEmployees });
		} else {
			loadEmployees();
		}
	}, []);

	function sortByAge() {
		const byAge = sortedState.employeeList.sort((a, b) => {
			return a.age - b.age;
		});
		setSortedState({ employeeList: byAge });
	}

	function sortByCountry(event) {
		const country = event.target.innerText;
		const thisCountry = yourEmployees.filter(user => user.country === country);
		setSortedState({ employeeList: thisCountry });
	}

	function loadEmployees() {
		API.fetchEmployees()
			.then(users => {
				localStorage.setItem("EmployeeList", JSON.stringify(users));
				setSortedState({ employeeList: users });
			})

			.catch(err => console.log(err));
	}

	return (
		<DirectoryContext.Provider
			value={{ yourEmployees, sortedState, sortByAge, sortByCountry }}
		>
			<NavBar />
			<div>
				<CardContainer />
			</div>
		</DirectoryContext.Provider>
	);
}

export default Directory;
