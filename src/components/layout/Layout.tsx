import { FC } from "react";
import Navbar from "./Navbar/Navbar";

import styles from "./Layout.module.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <main className={styles.pageWrapper}>{children}</main>
    </div>
  );
};

export default Layout;
