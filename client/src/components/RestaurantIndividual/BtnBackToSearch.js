import React from "react"; 
import { Link } from "react-router-dom";

const BtnBackToSearch = (props) => {
    return (
			<div>
				<Link to={`/search/${props.search}`} className="btn btn-primary btn-back btn-back-search">
					Back to Search Results
				</Link>
			</div>
		);
}

export default BtnBackToSearch;