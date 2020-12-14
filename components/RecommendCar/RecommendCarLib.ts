type Params = {
  distance: number;
  years: number;
  fuelPrice: number;
  cars: ICarFactory[];
};
export const rankCarsByTotalCost = ({
  cars,
  distance,
  years,
  fuelPrice,
}: Params) => {
  return cars.sort((a, b) => {
    const totalPriceA = a.getTotalAccumulatedPrice(distance, years, fuelPrice);
    const totalPriceB = b.getTotalAccumulatedPrice(distance, years, fuelPrice);
    return totalPriceA > totalPriceB ? 1 : -1;
  });
};
