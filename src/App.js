import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchJobs from "./components/SearchJobs";
import JobCards from "./components/JobCards";

export default function App() {
	return (
		<>
			<div className="page--top">
				<Navbar />
			</div>

			<div className="page--middle">
				<SearchJobs />
			</div>

			<div className="page--bottom">
				<JobCards />
				<JobCards />
			</div>
      
			<div className="page--footer">
				<Footer />
			</div>
		</>
	);
}
