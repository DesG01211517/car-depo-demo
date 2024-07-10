"use client";
import { useState, useEffect } from "react";
import React from "react";
import CarItem from "../components/CarItem";
import { getAllDocuments } from "@/utils/firebaseUtils";
import { db, auth } from "../../../firebase.config";
import { Car, Collection } from "@/utils/car";
import RegistrationForm from "../components/RegisterForm";
// import { AddCarForm } from "../components/AddCarForm";
import LoginForm from "../components/LoginForm";
import LogoutButton from "../components/LogOutButton";

export default function ManagementPage() {
  const [cars, setCars] = useState([]);
  const [collection, setCollection] = useState(null);
  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    vin: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const documents = await getAllDocuments(db, "cars");

        const carInstances = documents.map(
          (doc) => new Car(doc.make, doc.model, doc.year, doc.color, doc.vin)
        );
        setCollection(new Collection("Car Collection", carInstances));
        setCars(carInstances);
      } catch (error) {
        //console.log("error fetching docs", error);
      }
    }

    fetchData();
    return () => {
      //console.log("home page side effect cleanup");
    };
  }, []);

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
  const loggedIn = false;

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-center text-3xl font-bold mb-3">Manage Cars</h1>

      <LogoutButton />

      <RegistrationForm />

      <LoginForm />

      {/* {<AddCarForm handleAddCar={setNewCar} />} */}
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
      {cars.map((car, index) => (
        <CarItem key={index} car={car} onDelete={deleteCar} onEdit={editCar} />
      ))}
    </div>
  );
}
