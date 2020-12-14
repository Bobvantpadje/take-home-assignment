import React from "react";
import styles from "../Carlist.module.css";
import { CarItem } from "./CarItem";

export const List: React.FC<{ cars: Car[] }> = ({ cars }) => {
  if (!cars.length) {
    return <div>no cars found</div>;
  }

  return (
    <ul className={styles.container}>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};