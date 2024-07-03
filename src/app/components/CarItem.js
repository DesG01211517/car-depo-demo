import React from "react";

// components/CarItem.js
export default function CarItem({ car, onDelete, onEdit }) {
  return (
    <div className="width-75 p-4 m-4 border-4 rounded-2xl overflow-hidden shadow-lg bg-blue-200">
      {car.make} {car.model} ({car.year}) {car.color} {car.vin}
      <div className="flex justify-end">
        <button
          onClick={() => onEdit(car.id)}
          className="bg-yellow-400 text-black p-2 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(car.id)}
          className="bg-red-500 text-black p-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
