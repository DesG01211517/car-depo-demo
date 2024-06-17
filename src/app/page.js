import React from "react";
import VehicleStock from "./components/Car.js";
import { Vehicle, Warehouse } from "../utils/car.js";
const Home = () => (
  <main style={{ minHeight: "85vh" }}>
    <h1 className="my-12 text-6xl text-center font-bold">Car Warehousing</h1>
    <h2 className="mb-8 text-lg text-center font bold">
      This is the home page of Car Warehouse Demo.
    </h2>
    <div>
      <h1 className="m-5">Car List</h1>
      <VehicleStock
        make={"Chevy"}
        model={"Corvette"}
        year={"2024"}
        color={"Black"}
      />
      <VehicleStock
        make={"Ford"}
        model={"Mustang"}
        year={"2024"}
        color={"Black"}
      />
      <VehicleStock
        make={"Dodge"}
        model={"Charger"}
        year={"2024"}
        color={"Black"}
      />
    </div>
  </main>
);

export default Home;
