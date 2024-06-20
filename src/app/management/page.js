"use client";
import next from "next";
import { useState } from "react";
import { CarItem } from "././components/CarItem";

export default function ManagementPage() {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: "Dodge",
      model: "Charger",
      year: "2020",
      color: "Green",
      vin: "12355",
    },
    {
      id: 2,
      make: "Chevy",
      model: "Camaro",
      year: "2019",
      color: "Blue",
      vin: "98765",
    },
    {
      id: 3,
      make: "Ford",
      model: "F150",
      year: "2022",
      color: "White",
      vin: "26538",
    },
  ]);
  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    vin: "",
  });
  const [editingCar, setEditingCar] = useState(null);
  const [editingData, setEditingData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    vin: "",
  });

  const addCar = () => {
    setCars([...cars, { ...newCar, id: Date.now() }]);
    setNewCar({ make: "", model: "", year: "", color: "", vin: "" });
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  const editCar = (id) => {
    const car = cars.find((car) => car.id === id);
    setEditingCar(car);
    setEditingData(car);
  };

  const updateCar = () => {
    setCars(cars.map((car) => (car.id === editingCar.id ? editingData : car)));
    setEditingCar(null);
    setEditingData({ make: "", model: "", year: "", color: "", vin: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Manage Cars</h1>
      <div className="mb-4">
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
        <button onClick={addCar} className="bg-blue-500 text-white p-2">
          Add Car
        </button>
      </div>
      <ul>
        {cars.map((car) => (
          <CarItem
            key={car.id}
            car={car}
            onDelete={deleteCar}
            onEdit={editCar}
          />
        ))}
      </ul>
      {editingCar && (
        <div className="mt-4">
          <input
            type="text"
            value={editingData.make}
            onChange={(e) =>
              setEditingData({ ...editingData, make: e.target.value })
            }
            className="border p-2 mr-2"
            placeholder="Make"
          />
          <input
            type="text"
            value={editingData.model}
            onChange={(e) =>
              setEditingData({ ...editingData, model: e.target.value })
            }
            className="border p-2 mr-2"
            placeholder="Model"
          />
          <input
            type="text"
            value={editingData.year}
            onChange={(e) =>
              setEditingData({ ...editingData, year: e.target.value })
            }
            className="border p-2 mr-2"
            placeholder="Year"
          />
          <input
            type="text"
            value={editingData.color}
            onChange={(e) =>
              setEditingData({ ...editingData, color: e.target.value })
            }
            className="border p-2 mr-2"
            placeholder="Color"
          />
          <input
            type="text"
            value={editingData.vin}
            onChange={(e) =>
              setEditingData({ ...editingData, vin: e.target.value })
            }
            className="border p-2 mr-2"
            placeholder="VIN"
          />
          <button onClick={updateCar} className="bg-green-500 text-white p-2">
            Update Car
          </button>
        </div>
      )}
    </div>
  );
}
