import { FC, useMemo } from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  const links = useMemo(
    () => [
      { href: "/", name: "Главная" },
      { href: "/", name: "Для красоты" },
    ],
    []
  );

  return (
    <nav className={styles.Navbar}>
      <div className={styles.container}>
        <h1>Daily</h1>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.name} className={styles.link}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
