import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchJobs() {
	return (
		<div>
			<Box className="mui--box" component="form" noValidate autoComplete="on">
				<TextField
					className="search--box"
					id="outlined-basic"
					label="Search"
					variant="outlined"
					size="small"
				/>
				<TextField
					className="search--box"
					id="outlined-basic"
					label="Zip Code"
					variant="outlined"
					size="small"
				/>
				<button classname="button" type="submit">
					Submit
				</button>
			</Box>
		</div>
	);
}
