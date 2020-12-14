export const CarFactory = (car: Car): ICarFactory => {
  const getMonthlyFuelPrice = (
    monthlyDistanceInKM: number,
    fuelPrice: number
  ) => {
    const monthlyUsedFuel = monthlyDistanceInKM * car.fuelConsumption;
    const monthlyFuelPrice = monthlyUsedFuel * fuelPrice;
    return monthlyFuelPrice;
  };
  const getMaintenanceCost = (years: number) =>
    car.maintenanceCostPerYear * years;

  const getTotalAccumulatedPrice = (
    distancePerMontInKM: number,
    years: number,
    fuelPrice: number
  ) => {
    const TOTAL_MONTHS = years * 12;
    const totalFuelPrice =
      getMonthlyFuelPrice(distancePerMontInKM, fuelPrice) * TOTAL_MONTHS;

    const totalMaintenanceCost = getMaintenanceCost(years);
    return totalFuelPrice + totalMaintenanceCost + car.price;
  };

  return { ...car, getTotalAccumulatedPrice };
};
