import React from "react";
import Car from "./components/Car";
const Home = () => (
  <main>
    <h1 className="my-12 text-6xl text-center font-bold">Car Warehousing</h1>
    <h2 className="mb-8 text-lg text-center font bold">
      This is the home page of Car Warehouse Demo.
    </h2>
    <div>
      <h3>Car List</h3>
      <Car
        Make={"Chevrolet"}
        Model={"Corvette"}
        year={"2024"}
        color={"Black"}
      />
      <Car Make={"Ford"} Model={"Mustang"} year={"2024"} color={"Red"} />
      <Car Make={"Dodge"} Model={"Charger"} year={"2024"} color={"white"} />
    </div>
  </main>
);

export default Home;
