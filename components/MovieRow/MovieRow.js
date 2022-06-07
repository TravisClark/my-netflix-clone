import React, { useEffect, useState } from "react";
import Container from "../UI/Container";

function MovieRow(props) {
  const [movies, setMovies] = useState();
  console.log(props);
  //   useEffect(() => {
  //     const fetchMovies = async () => {
  //       const response = await fetch(fetchUrl);
  //       if (!response.ok) {
  //         throw new Error(`Fetch ${title} movies failed!`);
  //       }
  //       const data = response.json();
  //       setMovies(data);
  //     };
  //     try {
  //       fetchMovies();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },[fetchUrl,title]);
  //   console.log(movies);
  return (
    <Container className="p-4">
      <h1 className="text-white"></h1>
      <div className="w-20 h-24"></div>
    </Container>
  );
}

export default MovieRow;
