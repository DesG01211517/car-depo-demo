"Use CLient";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

// Test Home component
// describe("Page", () => {
// test("renders Home component with correct title and subtitle", () => {
//   const { getByText } = render(<Home />);

//   expect(getByText("Car Warehousing")).toBeInTheDocument();
//   expect(
//     getByText("This is the home page of Car Warehouse Demo.")
//   ).toBeInTheDocument();
//   expect(getByText("Car List")).toBeInTheDocument();
// });

// Test Collection class
// describe("Page", () => {
//   test("Collection initializes with correct name and cars", () => {
//     const newCars = [
//       new Car("dodge", "Charger", "2020", "green"),
//       new Car("Chevy", "Camaro", "2019", "blue"),
//       new Car("Ford", "F150", "2022", "White"),
//     ];
//     const collection = new Collection("Our Cars", newCars);

//     expect(collection.name).toBe("Our Cars");
//     expect(collection.cars).toHaveLength(3);
//     expect(collection.cars[0].make).toBe("dodge");
//     expect(collection.cars[1].make).toBe("Chevy");
//     expect(collection.cars[2].make).toBe("Ford");
//   });
// });
