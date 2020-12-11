import { useFormik } from "formik";
import React from "react";
import styles from './AddCar.module.css';
import { Input } from "../Input";

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
    onSubmit: (values, {resetForm}) => {
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
        />
        <Input
          id="make"
          name="make"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.make}
          label="Make:"
        />
        <Input
          id="version"
          name="version"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.version}
          label="Version:"
        />
        <Input
          id="releaseYear"
          name="releaseYear"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.releaseYear}
          label="Year:"
        />
        <Input
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          label="Price (€):"
        />
        <Input
          id="fuelConsumption"
          name="fuelConsumption"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fuelConsumption}
          label="Fuel consumption (KM/L):"
        />
        <Input
          id="maintenanceCostPerYear"
          name="maintenanceCostPerYear"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.maintenanceCostPerYear}
          label="Maintenance cost per year (€):"
        />
      </div>
      <button type="submit">add Car</button>
    </form>
  );
};
