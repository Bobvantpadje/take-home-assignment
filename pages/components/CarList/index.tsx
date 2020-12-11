import { FC } from "react";
import { CarItem } from "./CarItem";
import styles from "./Carlist.module.css";

export const CarList: FC<{ cars: Car[] }> = ({ cars }) => {
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
