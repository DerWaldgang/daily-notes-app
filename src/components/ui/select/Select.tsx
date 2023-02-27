import { FC } from "react";
import { useActions } from "@/hooks/Redux/useActions";

import styles from "./Select.module.scss";

type IOptions = {
    value: string;
    text: string;
}
interface ISelect {
    options: IOptions[]
    label?: string;
}

const Select: FC<ISelect> = ({options, label}) => {
    const { sortByDate } = useActions();
    const handleChange = (e: any) => {
        sortByDate(e.target.value);
      };

  return (
    <div className={styles.Select}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.selectField} onChange={(e) => handleChange(e)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
