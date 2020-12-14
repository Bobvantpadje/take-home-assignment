type Params = {
  distance: string;
  years: string;
  fuelPrice: string;
  cars: Car[];
};
export const rankCarsByTotalCost = ({cars,distance,years,fuelPrice,
}: Params) => {
  const carsWithTotalPrice = getCarsWithTotalPrice(
    cars,
    parseFloat(distance),
    parseFloat(years),
    parseFloat(fuelPrice)
  );
  return rankCarsByTotalPrice(carsWithTotalPrice);
};

const getCarsWithTotalPrice = (
  cars: Car[],
  distancePerMontInKM: number,
  years: number,
  fuelPrice: number
) => {
  return cars.map((car) => {
    const totalFuelPrice = getTotalPriceForFuel(
      car.fuelConsumption,
      distancePerMontInKM,
      years,
      fuelPrice
    );
    const totalMaintenanceCost = getTotalMaintenanceCost(
      car.maintenanceCostPerYear,
      years
    );
    const totalPrice = totalFuelPrice + totalMaintenanceCost + car.price;
    return {
      ...car,
      totalAccumulatedPrice: totalPrice,
    };
  });
};

const TOTAL_MONTHS = 12;
const getTotalPriceForFuel = (
  fuelConsumption: number,
  totalKMPerMonth: number,
  years: number,
  fuelPrice: number
) => {
  const totalKM = totalKMPerMonth * TOTAL_MONTHS * years;
  const totalUsedFuel = totalKM * fuelConsumption;
  const totalFuelPrice = totalUsedFuel * fuelPrice;
  return totalFuelPrice;
};

const getTotalMaintenanceCost = (pricePerYear: number, years: number) =>
  pricePerYear * years;


const rankCarsByTotalPrice = (cars: any) => {
  return cars.sort((a, b) =>
    a.totalAccumulatedPrice > b.totalAccumulatedPrice ? 1 : -1
  );
};
