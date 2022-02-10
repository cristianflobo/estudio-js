export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const COLORVERDE = 'COLORVERDE';
export const COLORROJO = 'COLORROJO';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = (data) => {
  // Completa la funcion
  return {type:INCREMENT, payload:data}
};
export const decrement = () => {
  // Completa la funcion
  return {type:DECREMENT}
};
export const colorVerde = () => {
  return {type:COLORVERDE}
}
export const colorRojo = () => {
  return {type:COLORROJO}
}