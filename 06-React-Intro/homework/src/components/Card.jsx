import React from "react";

export default function Card({max,min,name,img,onClose}) {
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h4>{name}</h4>
      <div>
        <p>Min</p>
        <p>{Math.trunc(min/10)}</p>
        <p>Max</p>
        <p>{Math.trunc(max/10)}</p>
      </div>+
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
    </div>
  );
}
