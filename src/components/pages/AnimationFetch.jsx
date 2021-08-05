import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const AnimationFetch = () => {
    const API_KEY = process.env.REACT_APP_API_KEY

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAnimationMovies()
    }, [])

    const getAnimationMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`
        )
        const data = await response.json()
        
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

export default AnimationFetch