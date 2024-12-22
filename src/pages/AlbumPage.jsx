import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../utils/api';
import styles from '../styles/AlbumPage.module.css';

function AlbumPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums().then(setAlbums);
  }, []);

  return (
    <div className={styles.albumPage}>
      <h1>Albums</h1>
      {albums.map(album => (
        <Link key={album.id} to={`/albums/${album.id}`} className={styles.albumLink}>
          <div className={styles.albumItem}>{album.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default AlbumPage;
