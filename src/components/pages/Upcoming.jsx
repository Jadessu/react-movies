import React from "react"
import "../css/styles.css"


export default function Upcoming(props){
    const IMG_API = "https://image.tmdb.org/t/p/w1280"
    return(
        <>
        <h1 className = "Upcoming"> UPCOMING</h1>
        <div className = "movie">
          
          <img className = "movie-img" src={IMG_API + props.image} alt={props.title}/>
      <div className = "movie-info">
            <h1>{props.title} </h1>
            <p>{props.overview} </p>
            <h2>{props.vote} </h2>
            <h3>{props.releaseDate}</h3>
            </div>
      
            </div>
        </>
    )
}