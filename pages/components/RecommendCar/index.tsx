import React from "react";
import { Input } from "../Input";
import { getCarsWithTotalPrice, rankCarsByTotalPrice } from "./helperFunction";

export const RecommendCar: React.FC<{ cars: Car[] }> = ({ cars }) => {
  const [distancePerMontInKM, setDistancePerMontInKM] = React.useState("");
  const [years, setYears] = React.useState("");
  const [rankedCars, setRankedCars] = React.useState<Car[]>([]);

  const calculateCarRanking = () => {
    const carsWithTotalPrice = getCarsWithTotalPrice(
      cars,
      parseInt(distancePerMontInKM),
      parseInt(years)
    );
    const carsRankedByTotalPrice = rankCarsByTotalPrice(carsWithTotalPrice);
    setRankedCars(carsRankedByTotalPrice);
  };

  return (
    <div>
      <h2>Rank cars</h2>
      <Input
        label="distance(km) per month"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setDistancePerMontInKM(e.target.value);
        }}
        value={distancePerMontInKM}
      />
      <Input
        label="years"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setYears(e.target.value);
        }}
        value={years}
      />
      <button onClick={calculateCarRanking}>rank cars</button>
      <ul>
        {rankedCars.map((car, index) => (
          <li key={car.id}>
            <b>{index + 1}.</b> {car.make} {car.model} - totalPrice: {car.totalAccumulatedPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};
