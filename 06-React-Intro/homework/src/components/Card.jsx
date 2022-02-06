import React from "react";
import CardM from "./card.module.css";
console.log(CardM);
export default function Card({ max, min, name, img, onClose }) {
  return (
    <div className={CardM.container}>
      <div className={CardM.DivP}>
        <button className={CardM.button} onClick={onClose}>X</button>
        <h4>{name}</h4>
      </div>
      <div className={CardM.Uno}>
        <div className={CardM.Div1}>
          <p>Min</p>
          <p>{Math.trunc(min / 10)}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{Math.trunc(max / 10)}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
      </div>
    </div>
  );
}

{
  /* <div className={CardM.Grid}>
<div className={CardM.Dos}>
  <div className={ CardM.Div1}>
    <p>Min</p>
    <p>Max</p>
  </div>
  <div className={CardM.Div2}>
    <p>{Math.trunc(min / 10)}</p>
    <p>{Math.trunc(max / 10)}</p>
  </div>
  <div className={CardM.Div3}>
  <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
  </div>
</div>


</div> */
}
