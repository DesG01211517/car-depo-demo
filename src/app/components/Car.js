import React from "react";

export default function CarStock({ make, model, year, color, vin }) {
  return (
    <div className="p-5 m-5 border bg-slate-400 border-black rounded-md">
      <h2>Make: {make}</h2>
      <br></br>
      <h2>Model: {model}</h2>
      <br></br>
      <p>Year: {year}</p>
      <br></br>
      <p>Color: {color}</p>
      <br></br>
      Vin: {vin}
    </div>
  );
}
