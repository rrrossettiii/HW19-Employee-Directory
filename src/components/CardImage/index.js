import React from "react";
import DirectoryContext from "../../utils/DirectoryContext";

function CardImg() {
	return (
		<DirectoryContext.Consumer>
			{user =>
				user?.image && (
					<div>
						<img className="card-img" src={user?.image} alt="user thumbnail" />
					</div>
				)
			}
		</DirectoryContext.Consumer>
	);
}

export default CardImg;
