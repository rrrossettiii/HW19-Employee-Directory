import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Context;
// =============:
import DirectoryContext from "../utils/DirectoryContext";

// Components;
import NavBar from "../components/NavBar";
import CardContainer from "../components/CardContainer";

function Directory() {
	const yourEmployees = JSON.parse(localStorage.getItem("EmployeeList")) || [];
	const [sortState, setSortState] = useState({
		country: "",
		age: ""
	});
	const [sortedEmployeeState, setSortedEmployeeState] = useState({
		employeeList: []
	});

	function init() {
		console.log("running effect");
		if (yourEmployees === []) {
			loadEmployees();
		} else {
			setSortedEmployeeState({ employeeList: yourEmployees });
		}
	}

	useEffect(init, []);

	function sortByAge() {
		const byAge = sortedEmployeeState.employeeList.sort((a, b) => {
			return a.age - b.age;
		});
		setSortedEmployeeState({ employeeList: byAge });
		if (sortState.country === "") {
			setSortState({ age: "<Age" });
		} else {
			setSortState({ country: sortState.country, age: " + (< Age)" });
		}
	}

	function sortByCountry(event) {
		const country = event.target.innerText;
		const thisCountry = yourEmployees.filter(user => user.country === country);
		setSortedEmployeeState({ employeeList: thisCountry });
		if (sortState.age === "") {
			setSortState({ country: country });
		} else {
			setSortState({ country: country, age: " + (< Age)" });
		}
	}

	function loadEmployees() {
		API.fetchEmployees()
			.then(users => {
				localStorage.setItem("EmployeeList", JSON.stringify(users));
				setSortedEmployeeState({ employeeList: users });
			})

			.catch(err => console.log(err));
	}

	return (
		<DirectoryContext.Provider
			value={{
				yourEmployees,
				sortedEmployeeState,
				sortState,
				sortByAge,
				sortByCountry
			}}
		>
			<NavBar />
			<div>
				<CardContainer />
			</div>
		</DirectoryContext.Provider>
	);
}

export default Directory;
