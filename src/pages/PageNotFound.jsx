import { Link } from 'react-router-dom';
import styles from '../styles/PageNotFound.module.css';

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default PageNotFound;
