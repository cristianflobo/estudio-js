import { INCREMENT, DECREMENT,COLORVERDE,COLORROJO } from '../actions';

const initialState = {
  count: 0 ,
  color:''

}
console.log("uno",initialState.count)

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return{
        ...state,
        count: state.count - 1
      }
    case COLORVERDE:
      return{
        ...state,
        color: state.color = "gayverde"
      }
    case COLORROJO:
      return{
        ...state,
        color: state.color = "gayrojo"
      }
    default:
      return state;
  }
};