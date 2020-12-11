import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { api } from "./api";
import { CarList } from "./components/CarList";

export default function Home() {
  const [cars, setCars] = React.useState<Car[]>([]);
  const [filterString, setFilterString] = React.useState("");
  const filteredCars = useFilterCarByYearAndMake(cars, filterString);
  // Fake an api call. When doing actual api call we should add some loading/error handling
  React.useEffect(() => {
    setCars(api.getCars());
  }, []);

  return (
    <div className={styles.container}>
      {filterString}
      <input
        onChange={(e) => {
          setFilterString(e.target.value);
        }}
        value={filterString}
      />
      <CarList cars={filteredCars} />
    </div>
  );
}

const useFilterCarByYearAndMake = (cars: Car[], filterString: string) => {
  const [filteredCars, setFilteredCars] = React.useState(cars);

  React.useEffect(() => {
    const filteredCars = filterCarsByYearAndMake(cars, filterString)
    setFilteredCars(filteredCars);
  }, [filterString, cars]);

  return filteredCars;
};

const filterCarsByYearAndMake = (cars: Car[], filterString: string) => {
  return cars.filter(
    (car) =>
      car.releaseYear.toString().includes(filterString) ||
      car.make.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
  );
};
