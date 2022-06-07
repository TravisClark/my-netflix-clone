import React, { useEffect } from "react";
import Backdrop from "../../components/Backdrop/Backdrop";
import MovieRow from "../../components/MovieRow/MovieRow";
import { movieRequests } from "../../store/movieRequests";

const api_key = "b27070b7fe55b14ef83966ddfd1103c9";
const popularMovies_Url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

function Home() {
  // useEffect(() => {
  //   const fetchMoviesData = async () => {
  //     const request = await fetch(popularMovies_Url);
  //     const data = await request.json();
  //     if (!request.ok) {
  //       throw new Error("Fetching movies failed!");
  //     }
  //     console.log(data.results)
  //   };
  //   try {
  //     fetchMoviesData()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  return (
    <>
      <Backdrop />
      <MovieRow title='Horror' fetchUrl={movieRequests.fetchHorrorMovies}/>
    </>
  );
}



export default Home;
