import { useFormik } from "formik";
import React from "react";
import { Input } from "../Input";
import { getCarsWithTotalPrice, rankCarsByTotalPrice } from "./helperFunction";
import * as Yup from "yup";

type Params = {
  distance: string;
  years: string;
  fuelPrice: string;
};

export const RecommendCar: React.FC<{ cars: Car[] }> = ({ cars }) => {
  const [rankedCars, setRankedCars] = React.useState<Car[]>([]);
  const formik = useFormik({
    initialValues: {
      distance: "",
      years: "",
      fuelPrice: "",
    },
    validationSchema: Yup.object().shape({
      distance: Yup.number().required("Required").typeError("Invalid Number"),
      years: Yup.number().required("Required").typeError("Invalid Number"),
      fuelPrice: Yup.number().required("Required").typeError("Invalid Number"),
    }),
    onSubmit: (values) => {
      calculateCarRanking(values);
    },
  });

  const calculateCarRanking = ({ distance, years, fuelPrice }: Params) => {
    const carsWithTotalPrice = getCarsWithTotalPrice(
      cars,
      parseFloat(distance),
      parseFloat(years),
      parseFloat(fuelPrice)
    );
    const carsRankedByTotalPrice = rankCarsByTotalPrice(carsWithTotalPrice);
    setRankedCars(carsRankedByTotalPrice);
  };

  return (
    <div className="block-container">
      <h2>Rank cars</h2>
      <p>
        Enter the amount of km you would like to drive per month and the amount
        of years and we will rank the cars based on the total price!
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="distance"
          name="distance"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.distance}
          label="Distance (KM per month):"
          error={formik.touched.distance ? formik.errors.distance : ""}
        />
        <Input
          id="years"
          name="years"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.years}
          label="Years:"
          error={formik.touched.years ? formik.errors.years : ""}
        />
        <Input
          id="fuelPrice"
          name="fuelPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fuelPrice}
          label="Fuel price"
          error={formik.touched.fuelPrice ? formik.errors.fuelPrice : ""}
        />
        <button type="submit">rank cars</button>
      </form>
      <ul>
        {rankedCars.map((car, index) => (
          <li key={car.id}>
            <b>{index + 1}.</b> {car.make} {car.model} - totalPrice: €
            {car.totalAccumulatedPrice.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};
