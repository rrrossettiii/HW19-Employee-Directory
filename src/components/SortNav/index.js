import React from "react";
import "./style.css";

// Components;
// ============:
import { Nav } from "react-bootstrap";
import SortDropdown from "../SortDropdown";

// Context;
// =============:

const SortNav = () => {
	return (
		<Nav
			className="justify-content-end"
			variant="tabs"
			defaultActiveKey="/home"
		>
			<Nav.Item className="yourEmployees">
				<Nav.Link disabled>
					<h4>Your Employees:</h4>
				</Nav.Link>
			</Nav.Item>
			<SortDropdown />
			<Nav.Item>
				<Nav.Link href="/home">Reset</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default SortNav;
