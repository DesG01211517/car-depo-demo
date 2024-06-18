import React from "react";
import carStock from "./components/Car.js";
import { Car, Collection } from "../utils/car.js";
const Home = () => {
  //const array of cars
  let newCars = [
    new Car("dodge", "Charger", "2020", "green"),
    new Car("Chevy", "Camaro", "2019", "blue"),
    new Car("Ford", "F150", "2022", "White"),
  ];

  //New Warehouse object made with name
  const collection = new Collection("Our Cars", newCars);

  return (
    <main style={{ minHeight: "85vh" }}>
      <h1 className="my-12 text-6xl text-center font-bold">Car Warehousing</h1>
      <h2 className="mb-8 text-lg text-center font bold">
        This is the home page of Car Warehouse Demo.
      </h2>
      <div>
        <h1 className="m-5">Car List</h1>
        <carStock
          make={"Chevy"}
          model={"Corvette"}
          year={"2024"}
          color={"Black"}
        />
        <carStock
          make={"Ford"}
          model={"Mustang"}
          year={"2024"}
          color={"Black"}
        />
        <carStock
          make={"Dodge"}
          model={"Charger"}
          year={"2024"}
          color={"Black"}
        />
      </div>
    </main>
  );
};
export default Home;
