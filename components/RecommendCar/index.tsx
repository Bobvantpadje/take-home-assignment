import { useFormik } from "formik";
import React from "react";
import { Input } from "../Input";
import { rankCarsByTotalCost } from "./RecommendCarLib";
import * as Yup from "yup";

export const RecommendCar: React.FC<{ cars: ICarFactory[] }> = ({ cars }) => {
  const [rankedCars, setRankedCars] = React.useState<ICarFactory[]>([]);
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
      const rankedCars = rankCarsByTotalCost({
        cars,
        distance: parseFloat(values.distance),
        years: parseFloat(values.years),
        fuelPrice: parseFloat(values.fuelPrice),
      });
      setRankedCars(rankedCars);
    },
  });

  return (
    <div className="block-container">
      <h2>Rank cars</h2>
      <p>
        Enter the amount of km you would like to drive per month and the amount
        of years and we will rank the cars based on the total price!
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          {...formik.getFieldProps("distance")}
          label="Distance (KM per month):"
          error={formik.touched.distance ? formik.errors.distance : ""}
        />
        <Input
          {...formik.getFieldProps("years")}
          label="Years:"
          error={formik.touched.years ? formik.errors.years : ""}
        />
        <Input
          {...formik.getFieldProps("fuelPrice")}
          label="Fuel price"
          error={formik.touched.fuelPrice ? formik.errors.fuelPrice : ""}
        />
        <button type="submit">rank cars</button>
      </form>
      <ul>
        {rankedCars.map((car, index) => (
          <li key={car.id}>
            <b>{index + 1}.</b> {car.make} {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
};
