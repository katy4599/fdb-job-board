import React /*{useState, useEffect}*/ from 'react';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import SearchJobs from "./components/SearchJobs";
import JobCards from "./components/JobCards";
//import HandleSubmit from './components/HandleSubmit';
import data from './data';

export default function App() {
  //const [jobsData, setJobsData] = useState({})
 
  
  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

    
  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   }

    const search = 'Javascript';
    const zipcode = '64055';

  //   fetch(`https://api.adzuna.com/v1/api/jobs/us/search/2?app_id=9dd05241&app_key=de01cd4c74a173b4234f900921fb6e30&results_per_page=10&what=${search}&where=${zipcode}&distance=40`, requestOptions)
  //   .then(response => response.json())
  //   .then(response => setJobsData(response))
  //   .then(console.log(jobsData))
  //   .catch(error => console.log('error', error))
  //})
    
    const jobCards = (data.map(job => {
        return (
            <JobCards
              key={job.id}
              title={job.title}
              description={job.description}
              location={job.location.display_name}
              company={job.company.display_name}
              url={job.redirect_url}
            />
          )
        })
    )
    

  return (
    <>
			<div className="page--top">
				<Navbar />
			</div>
    
      <div className="page--middle">
        <SearchJobs />
      </div>
    
        {/* <Submit onClick= /> */}
  
      <div>
        <h1 className='result-title'>{search} jobs near {zipcode}</h1>
      </div>

      <div className="jobs-list">
        {jobCards}
      </div>

			<div className="page--footer">
				<Footer />
			</div>
		</>
    
  );
}
