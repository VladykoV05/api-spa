import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUser, fetchUserAlbums } from '../utils/api';
import Spinner from '../components/Spinner';
import styles from '../styles/UserDetailPage.module.css';

function UserDetailPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await fetchUser(userId);
        const albumsData = await fetchUserAlbums(userId);
        setUser(userData);
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUserData();
  }, [userId]);

  if (loading) return <Spinner />;

  return (
    <div className={styles.userDetailPage}>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <h2>Albums</h2>
      <div className={styles.albumList}>
        {albums.map(album => (
          <Link key={album.id} to={`/albums/${album.id}`} className={styles.albumItem}>
            {album.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserDetailPage;
