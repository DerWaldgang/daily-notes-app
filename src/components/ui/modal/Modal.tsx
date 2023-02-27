import { FC } from "react";
import cn from "classnames";

import styles from "./Modal.module.scss";

interface IModal {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void
}

const Modal: FC<IModal> = ({ children, isVisible, setIsVisible }) => {
  return (
    <div
      className={cn(styles.Modal, {
        [styles.active]: isVisible,
      })}
      onClick={(e) => {
        setIsVisible(false)
      }}
    >
      <div className={styles.content} onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
