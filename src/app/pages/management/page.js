"use client";
import React from "react";
import { useState } from "react";
import CarStock from "@/app/components/Car";
import { Car, Collection } from "@/utils/car";

export default function ManagementPage() {
  const [collection, setCollection] = useState(new Collection(), [
    new Car("Dodge", "Charger", "2020", "green", "12355"),
    new Car("Chevy", "Camaro", "2019", "blue", "98765"),
    new Car("Ford", "F150", "2022", "White", "26538"),
  ]);
}


  <div>
    {collection.cars.map((car) => {
      return (
        <CarStock
          key={car.vin}
          make={car.make}
          model={car.model}
          year={car.year}
          color={car.color}
        />
      );
    })}
  </div>;
}