import React from "react";
import styles from "./Input.module.css";

type Props = {
  id?: string;
  name?: string;
  type?: string;
  onChange: any;
  value: string;
  label?: string;
  placeholder?: string;
};

export const Input: React.FC<Props> = ({ label, ...args }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={args.name}> {label} </label>}
      <input className={styles.input} {...args} />
    </div>
  );
};
