import React from "react";
import CarStock from "./components/Car.js";
import { Car, Collection } from "../utils/car.js";

const Home = () => {
  //const array of cars
  let newCars = [
    {
      make: "Dodge",
      model: "Charger",
      year: "2020",
      color: "green",
      vin: "12355",
    },
    {
      make: "Chevy",
      model: "Camaro",
      year: "2019",
      color: "blue",
      vin: "98765",
    },
    { make: "Ford", model: "F150", year: "2022", color: "White", vin: "26538" },
  ];

  //New Warehouse object made with name
  const collection = new Collection("Our Cars", newCars);

  // return (
  //   <main style={{ minHeight: "85vh" }}>
  //     <h1 className="my-12 text-6xl text-center font-bold">Car Warehousing</h1>
  //     <h2 className="mb-8 text-lg text-center font-bold">
  //       This is the home page of Car Warehouse Demo.
  //     </h2>
  //     <div>
  //       <h1 className="m-5 font-bold">Car List</h1>
  //       {collection.cars.map((car, index) => (
  //         <CarStock
  //           key={`${car.vin}-${index}`}
  //           make={car.make}
  //           model={car.model}
  //           year={car.year}
  //           color={car.color}
  //         />
  //       ))}
  //     </div>
  //   </main>
  // );
};
export default Home;
