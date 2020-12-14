import { CarItem } from "./List/CarItem";
import styles from "./Carlist.module.css";
import { Input } from "../Input";
import React from "react";
import { useFilterCarsByYearAndMake } from "../../../hooks/useFilterCarsByYearAndMake";
import { List } from "./List/List";
export const CarList: React.FC<{ cars: Car[]; searchable?: boolean }> = ({
  cars,
  searchable = true,
}) => {
  const [filterString, setFilterString] = React.useState("");
  const filteredCars = useFilterCarsByYearAndMake(cars, filterString);

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
      <List cars={filteredCars} />
    </div>
  );
};
