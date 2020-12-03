import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Context;
// =============:
import DirectoryContext from "../utils/DirectoryContext";

// Components;
import SortNav from "../components/SortNav";
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
		console.log(yourEmployees);
		if (!yourEmployees[0]) {
			loadEmployees();
		} else {
			setSortedEmployeeState({ employeeList: yourEmployees });
		}
	}

	useEffect(init, []);

	function sortByAge(event) {
		const byAge = sortedEmployeeState.employeeList.sort((a, b) => {
			return a.age - b.age;
		});
		if (event.target.innerText === "Youngest") {
			setSortedEmployeeState({ employeeList: byAge });
			if (sortState.country === "") {
				setSortState({ age: "Youngest" });
			} else {
				setSortState({ country: sortState.country, age: "Youngest" });
			}
		} else if (event.target.innerText === "Oldest") {
			setSortedEmployeeState({ employeeList: byAge.reverse() });
			if (sortState.country === "") {
				setSortState({ age: "Oldest" });
			} else {
				setSortState({ country: sortState.country, age: "Oldest" });
			}
		}
	}

	function sortByCountry(event) {
		const country = event.target.innerText;
		const thisCountry = yourEmployees.filter(user => user.country === country);
		setSortedEmployeeState({ employeeList: thisCountry });
		setSortState({ country: country });
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
			<SortNav />
			<div>
				<CardContainer />
			</div>
		</DirectoryContext.Provider>
	);
}

export default Directory;
