const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
    
  };


  function rootReducer(state = initialState, action) {
    console.log("hola")
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
      console.log("hola2",action)
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    
    if(action.type === "REMOVE_MOVIE"){
        return {
            ...state

        }
    }
    if(action.type === "GET_MOVIE_DETAIL"){
        return{
            ...state
           // getMovieDetail:
        }

    }
    return state;
  }
  
  export default rootReducer;