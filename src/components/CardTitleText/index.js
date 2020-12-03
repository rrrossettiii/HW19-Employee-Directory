import React from "react";
import DirectoryContext from "../../utils/DirectoryContext";

function CardTitleText() {
	return (
		<DirectoryContext.Consumer>
			{user => user?.name && <h2>{user?.name}</h2>}
		</DirectoryContext.Consumer>
	);
}

export default CardTitleText;
