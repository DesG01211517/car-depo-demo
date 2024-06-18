import React from "react";
import CarStock from "./components/Car.js";
import { Car, Collection } from "../utils/car.js";

const Home = () => {
  //const array of cars
  let newCars = [
    {"Dodge", "Charger", "2020", "green", "12355"},
    {"Chevy", "Camaro", "2019", "blue", "98765"},
    {"Ford", "F150", "2022", "White", "26538"},
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
        {collection.cars.map((car, index) => (
            <CarStock
              key={Car.vin}
              make={Car.make}
              model={Car.model}
              year={Car.year}
              color={Car.color}
            />
          ))};
        

        <CarStock
          make={"Chevy"}
          model={"Corvette"}
          year={"2024"}
          color={"Black"}
        />
        <CarStock
          make={"Ford"}
          model={"Mustang"}
          year={"2024"}
          color={"Black"}
        />
        <CarStock
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
