import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { api } from "./api";
import { CarList } from "./components/CarList";

export default function Home() {
  const [cars, setCars] = React.useState<Car[]>([]);

  // Fake an api call. When doing actual api call we should add some loading/error handling
  useEffect(() => {
    setCars(api.getCars());
  }, []);

  return (
    <div className={styles.container}>
      <CarList cars={cars} />
    </div>
  );
}
