import React from 'react'

const ResultsSearch = (props) => {
    
    console.log(props.article)   
    return(
        <div className="search results">
            <div className="txt">
            <h2>{props.article}</h2>
            <h3>{props.title}</h3>
            <p>{props.text}</p>   
            </div>
        </div>

)
}



export default ResultsSearch