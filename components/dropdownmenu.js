import { useState } from "react";
import styles from "../styles/menu.module.css";

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={`${styles.dropdowntoggle}${isOpen ? ` ${styles.dropdownselected}` : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>
      <div
        className={styles.dropdowndiv}
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
