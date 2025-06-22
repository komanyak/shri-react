import React from "react";
import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu.tsx";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Logo />
        <div className={styles.name}>Межгалактическая аналитика</div>
      </div>
      <Menu />
    </header>
  );
};