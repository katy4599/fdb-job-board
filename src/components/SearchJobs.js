import React from "react";
//import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getData } from "./GetData";

export default function SearchJobs() {
		// const [search, setSearch] = useState("");
		// const [zipcode, setZipcode] = useState("");
	return (
		<div className='mui--box'>
			<form className='mui--box' component="form" id="form" noValidate autoComplete="on">
				<TextField 
					className="search--box"
					id="search"
					label="Search"
					variant="outlined"
					type="text"
					//value={search}
					//onChange={(e) => {
					//	setSearch(e.target.value)
					
				/>
				<TextField
					className="search--box"
					id="zipcode"
					label="Zip Code"
					variant="outlined"
					type="text"
					// value={zipcode}
					// onChange={(e) => {
					// 	setZipcode(e.target.value)
					
				/>
				<button onSubmit={getData} className="button" type="submit" id="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
