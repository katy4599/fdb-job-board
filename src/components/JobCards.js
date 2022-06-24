import React from "react";

export default function JobCards(job) {
    console.log(job)
    return (
        <div>
            <div className="jobCard">
                <a href={job.url} className="jobTitle">
                    <h1 >{job.title}</h1>
                </a>
                    <h2 className='comp-loc'>{job.company.display_name} * {job.location.display_name}</h2> 
                    <h4 className='description'>{job.description}</h4> 
            </div>
        </div>
    )
}