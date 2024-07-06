import React from "react";

export default function AddCarForm({ handleAddCar }) {
  return (
    <div className="flex mb-4 text-center">
      <form>
        <input
          type="text"
          value={newCar.make}
          onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
          className="border p-2 mr-2"
          placeholder="Make"
        />
        <input
          type="text"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
          className="border p-2 mr-2"
          placeholder="Model"
        />
        <input
          type="text"
          value={newCar.year}
          onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
          className="border p-2 mr-2"
          placeholder="Year"
        />
        <input
          type="text"
          value={newCar.color}
          onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
          className="border p-2 mr-2"
          placeholder="Color"
        />
        <input
          type="text"
          value={newCar.vin}
          onChange={(e) => setNewCar({ ...newCar, vin: e.target.value })}
          className="border p-2 mr-2"
          placeholder="VIN"
        />

        <button
          onClick={addCar}
          className="border p-2 mr-2 bg-blue-500 text-white"
        >
          Add Car
        </button>
        <button
          onClick={updateCar}
          className="border mr-2 bg-green-500 text-white p-2"
        >
          Update Car
        </button>
      </form>
    </div>
  );
}
