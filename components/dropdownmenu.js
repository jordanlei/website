import React, { useState } from "react";
import styles from "../styles/menu.module.css";

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdowntoggle + " " + styles.dropdownselected} onClick={toggleDropdown}>
          Menu
        </button>
        <div className={styles.dropdowndiv}>{children}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropdowntoggle} onClick={toggleDropdown}>
            Menu
        </button>
        <div className={styles.dropdowndiv} style={{opacity: "0"}}>{children}</div>
      </div>
    );
  }
};

export default DropdownMenu;
