/// <reference types="next" />
/// <reference types="next/types/global" />

type Car = {
  id: string;
  model: string;
  make: string;
  version: string;
  releaseYear: number;
  price: number; // Euros
  fuelConsumption: number; // KM per liter
  maintenanceCostPerYear: number;
  totalAccumulatedPrice?: number;
};
