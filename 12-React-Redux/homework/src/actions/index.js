
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
        //"http://www.omdbapi.com/?apikey=dd49b3bb="
      return fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=c7c650c7`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }