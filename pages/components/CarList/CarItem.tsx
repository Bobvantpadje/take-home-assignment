import styles from "./Carlist.module.css";

export const CarItem: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <div>
          {car.make} {car.model} {car.version}
        </div>
        {car.releaseYear}
      </div>
      <Row>Price: €{car.price}</Row>
      <Row>Year: {car.releaseYear}</Row>
      <Row>Usage (€/L): €{car.fuelConsumption}</Row>
      <Row>Maintenance (€/Year): €{car.maintenanceCostPerYear}</Row>
    </li>
  );
};

const Row: React.FC = ({ children }) => (
  <div className={styles.itemRow}>{children}</div>
);
