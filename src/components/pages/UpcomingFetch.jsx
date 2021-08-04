import React from "react";
import { useEffect, useState } from "react";
import Upcoming from "./Upcoming";


const UpcomingFetch = () => {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
        )
        const data = await response.json()
        setMovies(data.results)
        
        
    }

    return(
        <div className = "movie-container">
            {movies.map((movie) => (
                <Upcoming
                title={movie.title}
                overview={movie.overview}
                vote={movie.vote_average}
                image={movie.poster_path}
                releaseDate={movie.release_date}
                id={movie.id}
                />
            ))}
            

        </div>
    )
}

export default UpcomingFetch