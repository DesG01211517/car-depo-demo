//import React from "react";

// components/CarItem.js
export default function CarItem({ car, onDelete, onEdit }) {
  return (
    <li className="border p-2 mb-2 flex justify-between">
      {car.make} {car.model} ({car.year}) - {car.color}
      <div>
        <button
          onClick={() => onEdit(car.id)}
          className="bg-yellow-500 text-white p-2 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(car.id)}
          className="bg-red-500 text-white p-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
