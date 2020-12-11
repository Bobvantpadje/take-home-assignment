import { useFormik } from "formik";

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
    onSubmit: (values) => {
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
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="model"
        name="model"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.model}
        label="model"
      />
      <Input
        id="make"
        name="make"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.make}
        label="make"
      />
      <Input
        id="version"
        name="version"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.version}
        label="version"
      />
      <Input
        id="releaseYear"
        name="releaseYear"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.releaseYear}
        label="releaseYear"
      />
      <Input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
        label="price"
      />
      <Input
        id="fuelConsumption"
        name="fuelConsumption"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fuelConsumption}
        label="fuelConsumption"
      />
      <Input
        id="maintenanceCostPerYear"
        name="maintenanceCostPerYear"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.maintenanceCostPerYear}
        label="maintenanceCostPerYear"
      />
      <button
        type="submit"
      >
        add Car
      </button>
    </form>
  );
};

type Props = {
  id: string;
  name: string;
  type: string;
  onChange: any;
  value: string;
  label?: string;
};

const Input: React.FC<Props> = ({ label, ...args }) => {
  return (
    <div>
      {label && <label htmlFor={args.name}> {label} </label>}
      <input {...args} />
    </div>
  );
};
