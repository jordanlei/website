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
        <Link href="#">
          Experience
        </Link>
      </span>
      <span className={styles.menuitem}>
        <Link href="#">
          Art
        </Link>
      </span>
      <span className={styles.menuitem}>
        <Link href="#">
          Contact
        </Link>
      </span>
    </div>
  );
}
