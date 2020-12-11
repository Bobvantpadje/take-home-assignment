import Head from "next/head";
import React from "react";
import { useFilterCarsByYearAndMake } from "../hooks/useFilterCarsByYearAndMake";
import styles from "../styles/Home.module.css";
import { api } from "./api";
import { AddCar } from "./components/AddCar";
import { CarList } from "./components/CarList";
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
    <div className={styles.container}>
      <AddCar
        addCar={(newCar: Car) => {
          setCars((prevCars) => [...prevCars, newCar]);
        }}
      />
      <br />
      <input
        onChange={(e) => {
          setFilterString(e.target.value);
        }}
        value={filterString}
      />
      <CarList cars={filteredCars} />
      <br />
      <RecommendCar cars={cars}/>
    </div>
  );
}
