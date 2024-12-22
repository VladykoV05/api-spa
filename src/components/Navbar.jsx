import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navbar__link}>Users</Link>
      <Link to="/albums" className={styles.navbar__link}>Albums</Link>
    </div>
  );
}

export default Navbar;
