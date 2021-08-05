import React from "react"
import "../css/styles.css"
export default function MovieCard(props){

    const IMG_API = "https://image.tmdb.org/t/p/w1280"

   
    return (
        <div className="movie">
            <div>
            <img src={IMG_API + props.image} 
            alt = {props.title} />
            </div>
            <div className="movie-info">
                <h3>{props.title}</h3>
                <span>{props.vote}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
               <p>{props.overview}</p>
            </div>
        </div>
      )
    }