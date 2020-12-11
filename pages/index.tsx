import React from "react";
import { useFilterCarsByYearAndMake } from "../hooks/useFilterCarsByYearAndMake";
import { api } from "./api";
import { AddCar } from "./components/AddCar";
import { CarList } from "./components/CarList";
import { Container } from "./components/Container";
import { Input } from "./components/Input";
import { RecommendCar } from "./components/RecommendCar";

export default function Home() {
  const [cars, setCars] = React.useState<Car[]>([]);
  const [filterString, setFilterString] = React.useState("");
  const filteredCars = useFilterCarsByYearAndMake(cars, filterString);

  // Fake an api call. When doing actual api call we should add some loading/error handling
  React.useEffect(() => {
    setCars(api.getCars());
  }, []);

  return (
    <div>
      <h1>Welcome to the car portal</h1>
      <p>
        In this portal you can see all available cars. It's also possible to
        filter the list based on year or make of the car, add new cars and rank
        the cars!
      </p>
      <br />
      <Container>
        <AddCar
          addCar={(newCar: Car) => {
            setCars((prevCars) => [...prevCars, newCar]);
          }}
        />
      </Container>
      <Container>
        <h2>Car list</h2>
        <Input
          onChange={(e) => {
            setFilterString(e.target.value);
          }}
          value={filterString}
          label="Search for car"
          placeholder="Year or make"
        />
        <CarList cars={filteredCars} />
      </Container>
      <Container>
        <RecommendCar cars={cars} />
      </Container>
    </div>
  );
}
