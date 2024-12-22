import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../utils/api';
import styles from '../styles/UserPage.module.css';

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className={styles.userPage}>
      <h1>Users</h1>
      {users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`} className={styles.userLink}>
          <div className={styles.userItem}>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default UserPage;
