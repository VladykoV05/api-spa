import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum, fetchAlbumPhotos, fetchUser } from '../utils/api';
import styles from '../styles/AlbumDetailPage.module.css';
import Spinner from '../components/Spinner';

function AlbumDetailPage() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const albumData = await fetchAlbum(albumId);
      setAlbum(albumData);
      const photosData = await fetchAlbumPhotos(albumId);
      setPhotos(photosData);
      const userData = await fetchUser(albumData.userId);
      setUser(userData);
    };

    loadData();
  }, [albumId]);

  if (!album || !photos.length || !user) return <Spinner />;

  return (
    <div className={styles.albumDetailPage}>
      <h1>{album.title}</h1>
      <h2>Created by: <Link to={`/users/${user.id}`} className={styles.userLink}>{user.name}</Link></h2>
      <div className={styles.photos}>
        {photos.map(photo => (
          <img key={photo.id} src={photo.url} alt={photo.title} className={styles.photo} />
        ))}
      </div>
    </div>
  );
}

export default AlbumDetailPage;