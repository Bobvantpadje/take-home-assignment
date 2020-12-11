import React from "react";

type Props = {
  id?: string;
  name?: string;
  type?: string;
  onChange: any;
  value: string;
  label?: string;
};

export const Input: React.FC<Props> = ({ label, ...args }) => {
  return (
    <div>
      {label && <label htmlFor={args.name}> {label} </label>}
      <input {...args} />
    </div>
  );
};
