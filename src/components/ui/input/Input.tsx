import { FC } from "react";
import { TypeInputProps } from "@/types/text-editor.types";

import styles from "./Input.module.scss";

interface IInput extends TypeInputProps {
    value: string;
    type?: string;
    onChange: (event: any) => void;
    placeholder?: string;
    label?: string
}

const Input: FC<IInput> = ({value, type, onChange, placeholder, label, ...rest}) => {
  return (
    <div className={styles.Input} >
    {label && <label className={styles.label}>{label}</label>}
    <input
      value={value}
      type={type}
      className={styles.inputField}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
    </div>
  );
};

export default Input;
