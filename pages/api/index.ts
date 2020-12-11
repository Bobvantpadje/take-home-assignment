export const api = {
  getCars: (): Car[] => {
    return [
      {
        id: "1",
        make: "Citroen",
        model: "C3",
        version: "petrol",
        releaseYear: 2018,
        price: 10000,
        fuelConsumption: 0.66,
        maintenanceCostPerYear: 300,
      },
      {
        id: "2",
        make: "Citroen",
        model: "C2",
        version: "petrol",
        releaseYear: 2018,
        price: 10000,
        fuelConsumption: 0.66,
        maintenanceCostPerYear: 300,
      },
      {
        id: "3",
        make: "Honda",
        model: "Fit",
        version: "petrol",
        releaseYear: 2017,
        price: 10000,
        fuelConsumption: 0.66,
        maintenanceCostPerYear: 300,
      },
      {
        id: "4",
        make: "Honda",
        model: "NotThatFit",
        version: "petrol",
        releaseYear: 2019,
        price: 10000,
        fuelConsumption: 0.66,
        maintenanceCostPerYear: 300,
      },
    ];
  },
};
