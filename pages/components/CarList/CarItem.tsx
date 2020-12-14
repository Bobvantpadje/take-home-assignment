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
      <div className={styles.itemRow}>Price: €{car.price}</div>
      <div className={styles.itemRow}>Year: {car.releaseYear}</div>
      <div className={styles.itemRow}>Usage (KM/L): €{car.fuelConsumption}</div>
      <div className={styles.itemRow}>
        Maintenance (€/Year): €{car.maintenanceCostPerYear}
      </div>
    </li>
  );
};
