import React from "react";

export default function CarStock({ make, model, year, color }) {
  return (
    <div className="p-5 m-5 border bg-slate-400 border-black rounded-md">
      Make: {make}
      <br></br>
      Model: {model}
      <br></br>
      Year: {year}
      <br></br>
      Color: {color}
      <br></br>
    </div>
  );
}
