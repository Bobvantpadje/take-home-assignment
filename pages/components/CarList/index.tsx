import { FC } from "react";
import { CarItem } from "./CarItem";

export const CarList: FC<{ cars: Car[] }> = ({ cars }) => {
  if (!cars.length) {
    return <div>no cars found</div>;
  }
  return (
    <ul>
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};
