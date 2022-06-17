import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchJobs() {
	return (
		<div className='mui--box'>
			<Box className='mui--box' component="form" noValidate autoComplete="on">
				<TextField
					className="search--box"
					id="outlined-basic"
					label="Search"
					variant="outlined"
				/>
				<TextField
					className="search--box"
					id="outlined-basic"
					label="Zip Code"
					variant="outlined"
				/>
				{/* <button className="button" type="submit">
					Submit
				</button> */}
			</Box>
		</div>
	);
}
