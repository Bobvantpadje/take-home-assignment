import React from "react";
import { Input } from "../Input";

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

const getCarsWithTotalPrice = (
  cars: Car[],
  distancePerMontInKM: number,
  years: number
) => {
  return cars.map((car) => {
    const totalFuelConsumption = getTotalFullConsumption(
      car.fuelConsumption,
      distancePerMontInKM,
      years
    );
    const totalMaintenanceCost = getTotalMaintenanceCost(
      car.maintenanceCostPerYear,
      years
    );
    const totalPrice = totalFuelConsumption + totalMaintenanceCost + car.price;
    return {
      ...car,
      totalAccumulatedPrice: totalPrice,
    };
  });
};

const TOTAL_MONTHS = 12;
const getTotalFullConsumption = (
  fuelConsumption: number,
  totalKMPerMonth: number,
  years: number
) => totalKMPerMonth * TOTAL_MONTHS * years * fuelConsumption;

const getTotalMaintenanceCost = (pricePerYear: number, years: number) =>
  pricePerYear * years;

const rankCarsByTotalPrice = (cars: any) => {
  return cars.sort((a, b) =>
    a.totalAccumulatedPrice > b.totalAccumulatedPrice ? 1 : -1
  );
};
