import { FC } from "react";
import { CarItem } from "./CarItem";
import styles from "./Carlist.module.css";
import { Input } from "../Input";
import React from "react";
import { useFilterCarsByYearAndMake } from "../../../hooks/useFilterCarsByYearAndMake";

export const CarList: React.FC<{ cars: Car[]; searchable?: boolean }> = ({
  cars,
  searchable = true,
}) => {
  const [filterString, setFilterString] = React.useState("");
  const filteredCars = useFilterCarsByYearAndMake(cars, filterString);
  
  if (!cars.length) {
    return <div>no cars found</div>;
  }

  return (
    <div className="block-container">
      <h2>Car list</h2>
      {searchable && (
        <Input
          onChange={(e) => {
            setFilterString(e.target.value);
          }}
          value={filterString}
          label="Search for car"
          placeholder="Year or make"
        />
      )}
      <ul className={styles.container}>
        {filteredCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};
