import React from "react";
import "./style.css";

// Components;
// ============:
import { Dropdown } from "react-bootstrap";

// Context;
// =============:
import { useContext } from "react";
import DirectoryContext from "../../utils/DirectoryContext";

function SortDropdown() {
	const { yourEmployees } = useContext(DirectoryContext);
	const { sortState } = useContext(DirectoryContext);
	const { sortByCountry } = useContext(DirectoryContext);
	const { sortByAge } = useContext(DirectoryContext);
	const CountriesList = yourEmployees
		.map(({ country }) => country)
		.filter(function (item, index, inputArray) {
			return inputArray.indexOf(item) === index;
		})
		.sort();
	const Countries = CountriesList.map((country, index) => (
		<Dropdown.Item onClick={sortByCountry} key={index}>
			{country}
		</Dropdown.Item>
	));
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="dropdown-basic">
					Sort by: {sortState.country}
					{sortState.age}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={sortByAge}> {"<"} Age</Dropdown.Item>
					<Dropdown.Menu className="scrollList">
						<Dropdown.ItemText>Countries:</Dropdown.ItemText>
						<Dropdown.Menu>{Countries}</Dropdown.Menu>
					</Dropdown.Menu>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}

export default SortDropdown;
