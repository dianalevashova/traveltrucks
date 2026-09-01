'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Icon from '../Icon/Icon';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={
        isHome ? styles.header : `${styles.header} ${styles.headerGrey}`
      }
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Icon name="Logo" width={136} height={15} />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
