import { useFormik } from "formik";
import React from "react";
import styles from "./AddCar.module.css";
import { Input } from "../Input";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

export const AddCar: React.FC<{ addCar: (car: Car) => void }> = ({
  addCar,
}) => {
  const formik = useFormik({
    initialValues: {
      model: "",
      make: "",
      version: "",
      releaseYear: "",
      price: "",
      fuelConsumption: "",
      maintenanceCostPerYear: "",
    },
    validationSchema: Yup.object().shape({
      model: Yup.string().required("Invalid text").typeError("Invalid text"),
      make: Yup.string().required("Invalid text").typeError("Invalid text"),
      version: Yup.string().required("Invalid text").typeError("Invalid text"),
      releaseYear: Yup.number()
        .required("Invalid number")
        .typeError("Invalid number"),
      price: Yup.number()
        .required("Invalid number")
        .typeError("Invalid number"),
      fuelConsumption: Yup.number()
        .required("Invalid number")
        .typeError("Invalid number"),
      maintenanceCostPerYear: Yup.number()
        .required("Invalid number")
        .typeError("Invalid number"),
    }),
    onSubmit: (values, { resetForm }) => {
      addCar({
        id: uuidv4(), // You should normally do this on the back-end
        model: values.model,
        make: values.make,
        version: values.version,
        releaseYear: parseFloat(values.releaseYear),
        price: parseFloat(values.price),
        fuelConsumption: parseFloat(values.fuelConsumption),
        maintenanceCostPerYear: parseFloat(values.maintenanceCostPerYear),
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="block-container">
      <h2>Add new car</h2>
      <div className={styles.inputWrapper}>
        <Input
          {...formik.getFieldProps("model")}
          label="Model:"
          error={formik.touched.model ? formik.errors.model : ""}
        />
        <Input
          {...formik.getFieldProps("make")}
          label="Make:"
          error={formik.touched.make ? formik.errors.make : ""}
        />
        <Input
          {...formik.getFieldProps("version")}
          label="Version:"
          error={formik.touched.version ? formik.errors.version : ""}
        />
        <Input
          {...formik.getFieldProps("releaseYear")}
          label="Year:"
          error={formik.touched.releaseYear ? formik.errors.releaseYear : ""}
        />
        <Input
          {...formik.getFieldProps("price")}
          label="Price (€):"
          error={formik.touched.price ? formik.errors.price : ""}
        />
        <Input
          {...formik.getFieldProps("fuelConsumption")}
          label="Fuel consumption (KM/L):"
          error={
            formik.touched.fuelConsumption ? formik.errors.fuelConsumption : ""
          }
        />
        <Input
          {...formik.getFieldProps("maintenanceCostPerYear")}
          label="Maintenance cost per year (€):"
          error={
            formik.touched.maintenanceCostPerYear
              ? formik.errors.maintenanceCostPerYear
              : ""
          }
        />
      </div>
      <button type="submit">add Car</button>
    </form>
  );
};
