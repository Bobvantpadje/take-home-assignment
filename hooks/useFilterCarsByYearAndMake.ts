import React from "react";

export const useFilterCarsByYearAndMake = (cars: Car[], filterString: string) => {
    const [filteredCars, setFilteredCars] = React.useState(cars);
  
    React.useEffect(() => {
      setFilteredCars(filterCarsByYearAndMake(cars, filterString));
    }, [filterString, cars]);
  
    return filteredCars;
  };
  
  const filterCarsByYearAndMake = (cars: Car[], filterString: string) => {
    return cars.filter(
      (car) =>
        car.releaseYear.toString().includes(filterString) ||
        car.make.toLocaleLowerCase().includes(filterString.toLocaleLowerCase())
    );
  };