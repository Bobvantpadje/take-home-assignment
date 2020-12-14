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
  error?: string;
};

export const Input: React.FC<Props> = ({ label, error, type = "text", ...args }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={args.name}> {label} </label>}
      <div>
        <input
          className={styles.input}
          style={{ border: !!error && "1px solid red" }}
          type={type}
          {...args}
        />
        {error && <div className={styles.errorLabel}>{error}</div>}
      </div>
    </div>
  );
};