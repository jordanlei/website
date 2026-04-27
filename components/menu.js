import Link from "next/link";
import styles from "../styles/menu.module.css";
import DropdownMenu from "./dropdownmenu";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "/art", label: "Art" },
  { href: "#contact", label: "Contact" },
];

export default function Menu() {
  return (
    <div>
      <div className={styles.menu}>
        {NAV.map(({ href, label }) => (
          <span key={href} className={styles.menuitem}>
            <Link href={href}>{label}</Link>
          </span>
        ))}
      </div>
      <div className={styles.dropdown}>
        <DropdownMenu>
          {NAV.map(({ href, label }) => (
            <div key={href} className={styles.dropdownitem}>
              <Link href={href}>{label}</Link>
            </div>
          ))}
        </DropdownMenu>
      </div>
    </div>
  );
}
