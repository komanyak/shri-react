import React from 'react';
import { Button } from '../Button/Button';
import styles from"./SubmitButton.module.css"

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  onClick, 
  disabled = false 
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} className={styles.submitButton}>
      Отправить
    </Button>
  );
};
