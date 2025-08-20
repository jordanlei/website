import Link from "next/link";
import styles from "../styles/menu.module.css";
import DropdownMenu from "./dropdownmenu";

export default function Menu() {
  const menuitems = [
    <Link href="#about">About</Link>,
    <Link href="#research">Research</Link>,
    <Link href="#experience">Experience</Link>,
    <Link href="#education">Education</Link>,
    <Link href="/art">Art</Link>,
    <Link href="#contact">Contact</Link>,
  ];

  return (
    <div>
      <div className={styles.menu}>
        {menuitems.map((item, index) => (
          <span key={index} className={styles.menuitem}>{item}</span>
        ))}
      </div>

      <div className={styles.dropdown}>
        <DropdownMenu>
          {menuitems.map((item, index) => (
            <div key={index} className={styles.dropdownitem}>{item}</div>
          ))}
        </DropdownMenu>
      </div>
    </div>
  );
}
