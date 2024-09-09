import Link from "next/link";
import styles from "../styles/menu.module.css";
import DropdownMenu from "./dropdownmenu";

export default function Menu() {
  var menuitems = [
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
        {menuitems.map((e) => (
          <span className={styles.menuitem}>{e}</span>
        ))}
      </div>

      <div className={styles.dropdown}>
        <DropdownMenu>
        {menuitems.map((e) => (
          <div className={styles.dropdownitem}>{e}</div>
        ))}
        </DropdownMenu>
      </div>
    </div>
  );
}
