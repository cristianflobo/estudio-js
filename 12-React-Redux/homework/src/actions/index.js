
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
export function getMovies(titulo) {
  
    return function(dispatch) {
      console.log(titulo)
        //"http://www.omdbapi.com/?apikey=dd49b3bb="
      return fetch(`http://www.omdbapi.com/?s=${titulo}&apikey=c7c650c7`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }