import React, {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;
		setInputValue(value);
	}
 
	//Reset input value
	const handleClick = () => {
		setInputValue("");
	}

    return (
			<div>
				<header>
					<div className="row">
						<div className="col header-col">
							<Link to="/" className="navbar-brand">
								<h1 className="header-title">RESTAURANT FINDER</h1>
							</Link>
						</div>

						<div className="col col-auto header-col">
							<form>
								<div className="header-form-width">
									<input
										className="form-control"
										type="text"
										placeholder="Search by name, area or cuisine"
										onChange={handleChange}
										//Controlled component:
										value={inputValue}
									/>
									{/* //Ternary operator to redirect empty searches back to the home page */}
									<Link
										to={
											inputValue === ""
												? "/"
												: `/search/${inputValue}`.toLowerCase()
										}
									>
										<button
											className="btn btn-primary header-form-btn"
											onClick={handleClick}
										>
											Find Restaurants
										</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</header>
			</div>
		);
}

export default Header;

