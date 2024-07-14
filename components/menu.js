import Link from 'next/link';
import styles from '../styles/menu.module.css';

export default function Menu(){
    return (
    <div className={styles.menu}>
      <span className={styles.menuitem}>
        <Link href="#about">
          About
        </Link>
      </span>
      <span className={styles.menuitem}>
        <Link href="#projects">
          Projects
        </Link>
      </span>
      <span className={styles.menuitem}>
        <Link href="#education">
          Education
        </Link>
      </span>
      <span className={styles.menuitem}>
        <Link href="/art">
          Art
        </Link>
      </span>
      <span className={styles.menuitem}>
        <Link href="#contact">
          Contact
        </Link>
      </span>
    </div>
  );
}
