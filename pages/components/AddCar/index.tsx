export const AddCar: React.FC<{ addCar: (car: Car) => void }> = ({
  addCar,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          addCar({
            id: "1",
            make: "Citroen",
            model: "C3",
            version: "petrol",
            releaseYear: 2018,
            price: 10000,
            fuelConsumption: 0.66,
            maintenanceCostPerYear: 300,
          });
        }}
      >
        add Car
      </button>
    </div>
  );
};
