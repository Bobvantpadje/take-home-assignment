type FactoryFunctions = {
    getTotalAccumulatedPrice: (distancePerMontInKM: number,
        years: number,
        fuelPrice: number) => number
}
type ICarFactory = Car & FactoryFunctions;
