export const getCarsWithTotalPrice = (
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

export const rankCarsByTotalPrice = (cars: any) => {
  return cars.sort((a, b) =>
    a.totalAccumulatedPrice > b.totalAccumulatedPrice ? 1 : -1
  );
};
