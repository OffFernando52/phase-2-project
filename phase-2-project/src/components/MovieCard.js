import React from "react"
import Movies from "./Movies"

function MovieCard({movies}){
    return(
        <div className="cards">{movies.map(movie => <Movies movie={movie} key={movie.id} name={movie.name} description={movie.description} rate={movie.rate} image={movie.image}/>)}
        </div>
    )
}
export default MovieCard