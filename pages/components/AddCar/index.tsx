import { useFormik } from "formik";
import React from "react";
import styles from "./AddCar.module.css";
import { Input } from "../Input";
import * as Yup from "yup";

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
      model: Yup.string().required("invalid text"),
      make: Yup.string().required("invalid text"),
      version: Yup.string().required("invalid text"),
      releaseYear: Yup.number().required("invalid number"),
      price: Yup.number().required("invalid number"),
      fuelConsumption: Yup.number().required("invalid number"),
      maintenanceCostPerYear: Yup.number().required(
        "invalid number"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      addCar({
        id: "generateFakeId",
        model: values.model,
        make: values.make,
        version: values.version,
        releaseYear: parseInt(values.releaseYear),
        price: parseInt(values.price),
        fuelConsumption: parseInt(values.fuelConsumption),
        maintenanceCostPerYear: parseInt(values.maintenanceCostPerYear),
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Add new car</h2>
      <div className={styles.inputWrapper}>
        <Input
          id="model"
          name="model"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.model}
          label="Model:"
          error={formik.touched.model ? formik.errors.model : ""}
        />
        <Input
          id="make"
          name="make"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.make}
          label="Make:"
          error={formik.touched.make ? formik.errors.make : ""}
        />
        <Input
          id="version"
          name="version"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.version}
          label="Version:"
          error={formik.touched.version ? formik.errors.version : ""}
        />
        <Input
          id="releaseYear"
          name="releaseYear"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.releaseYear}
          label="Year:"
          error={formik.touched.releaseYear ? formik.errors.releaseYear : ""}
        />
        <Input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          label="Price (€):"
          error={formik.touched.price ? formik.errors.price : ""}
        />
        <Input
          id="fuelConsumption"
          name="fuelConsumption"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fuelConsumption}
          label="Fuel consumption (KM/L):"
          error={
            formik.touched.fuelConsumption ? formik.errors.fuelConsumption : ""
          }
        />
        <Input
          id="maintenanceCostPerYear"
          name="maintenanceCostPerYear"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.maintenanceCostPerYear}
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
