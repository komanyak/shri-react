import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuButton.module.css';

interface MenuButtonProps {
  icon: React.ReactNode;
  text: string;
  to: string; 
  className?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  text,
  to,
  className = '',
}) => {
  return (
    <NavLink
      to={to}
      className={`${styles.button} ${className}`}
      aria-label={text}
    >
      {icon}
      <span className={styles.text}>{text}</span>
    </NavLink>
  );
};