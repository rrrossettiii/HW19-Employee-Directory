import React from "react";
import "./style.css";

// Components;
// ============:
import { Nav } from "react-bootstrap";
import SortDropdown from "../SortDropdown";

// Context;
// =============:

const NavBar = () => {
	return (
		<Nav
			className="justify-content-end"
			variant="tabs"
			defaultActiveKey="/home"
		>
			<SortDropdown />
			<Nav.Item>
				<Nav.Link href="/home">Reset</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavBar;
