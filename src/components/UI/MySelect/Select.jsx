import React from 'react';
import styles from './Select.module.css';

const Select = ({ children, options, value, onChange }) => {
  return (
    <div className={styles.selectContainer}>
      <h3 className={styles.select}>{children}</h3>
      <select className={styles.customSelect} value={value} onChange={onChange}>
        <option value="">Выберите отель</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;