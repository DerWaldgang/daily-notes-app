import { FC, FormHTMLAttributes } from "react";
import Button from "../../button/Button";

import styles from "./NoticeSubmitForm.module.scss";

interface ISubmitForm extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: any) => void;
  buttonText?: string;
}

const NoticeSubmitForm: FC<ISubmitForm> = ({
  onSubmit,
  buttonText,
  children,
  ...rest
}) => {
  return (
    <form
      className={styles.NoticeSubmitForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      {...rest}
    >
      {children}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default NoticeSubmitForm;
