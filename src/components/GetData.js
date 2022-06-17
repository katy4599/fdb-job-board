//import React from 'react';

export function getData() {

    const search = document.getElementById('search').innerText;
    const zipcode = document.getElementById('zipcode').innerText;

    const myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");

    
     const requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
     }

    return fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=11ccbdf8&app_key=28974f1baeaec0b4f7432dfe7ccab886&results_per_page=10&what=${{search}}&where=${{zipcode}}&distance=1`, requestOptions)
      .then(data => data.json())
  }