import React from "react";

export default function JobCards(props) {
    console.log(props)
    return (
        <div>
            <div className="jobCard">
                <a href={props.url} className="jobTitle">
                    <h1 >{props.title}</h1>
                </a>
                    <h2 className='comp-loc'>{props.company} * {props.location}</h2> 
                    <h4 className='description'>{props.description}</h4> 
            </div>
        </div>
    )
}