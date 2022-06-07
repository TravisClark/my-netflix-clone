const API_KEY = 'b27070b7fe55b14ef83966ddfd1103c9';

export const movieRequests = {
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchCrimeMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
}