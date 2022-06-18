import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import SearchJobs from "./components/SearchJobs";
import JobCards from "./components/JobCards";
//import data from './data';
import { getData } from './components/GetData';
//import data from './data';
import t from 'typy';


// const search = 'Javascript';
// const zipcode = 90011;



export default function App() {
  const [jobsData, setJobsData] = useState([])

    useEffect(() => {
      let mounted = true;
      getData()
        .then(jobs => {
          if(mounted) {
            setJobsData(jobs)
          }
        })
      return () => mounted = false;
    }, [])
  
  let resultsArr = t(jobsData, 'results').safeArray;
     

  return (
    <>
			<div className="page--top">
				<Navbar />
			</div>
    
      <div className="mui--box">
				<SearchJobs />
        <button className="button" type="submit" onClick={getData()}>
					Submit
				</button>
			</div> 

      {/* <div>
        <h1 className='result-title'>{search} jobs near {zipcode}</h1>
      </div> */}

      <div className='body-section'>

        <div className="jobs-list">
          {resultsArr.map(job => (            
              <JobCards 
                    className="jobs-list"
                    key= {job.id}
                    // {...job}
                    // the below are here b/c don't know if {...job}works. 
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    description={job.description}
                    url={job.redirect_url}                     
                />
          ))
          }
        </div>
        

      </div>

			<div className="page--footer">
				<Footer />
			</div>
		</>
    
  );

}
