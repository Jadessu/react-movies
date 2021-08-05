import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const ActionFetch = () => {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getActionMovies()
    }, [])

    const getActionMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
        )
        const data = await response.json()
        console.log(data)
        console.log("hi")
        setMovies(data.results)
        
        
    }

    return(
        <div className = "movie-container">
            {movies.map((movie) => (
                <MovieCard
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

export default ActionFetch