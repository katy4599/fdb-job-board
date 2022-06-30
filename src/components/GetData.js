//import react, {useState} from 'react';

// const submitEl = document.getElementById('submit');
// submitEl.addEventListener("submit", getData);

export async function getData() {
  //let [jobsData, setJobsData] = useState([])
  //const form = document.getElementById('form');
  
  const searchEl =  document.getElementById('search');
  const zipcodeEl = document.getElementById('zipcode');
  const search = searchEl.value;
  const zipcode = zipcodeEl.value; 
  
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  
  const requestOptions = {
    method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
      }

      async function getApiData() {
      const data = (await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=11ccbdf8&app_key=28974f1baeaec0b4f7432dfe7ccab886&results_per_page=10&what=${search}&where=${zipcode}&distance=1`), requestOptions).json();
      return data;
    }
}
     


