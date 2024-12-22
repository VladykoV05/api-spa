const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers() {
  const response = await fetch(`${API_BASE}/users`);
  return response.json();
}

export async function fetchUser(id) {
  const response = await fetch(`${API_BASE}/users/${id}`);
  return response.json();
}

export async function fetchUserAlbums(userId) {
  const response = await fetch(`${API_BASE}/users/${userId}/albums`);
  return response.json();
}

export async function fetchAlbums() {
  const response = await fetch(`${API_BASE}/albums`);
  return response.json();
}

export async function fetchAlbum(albumId) {
  const response = await fetch(`${API_BASE}/albums/${albumId}`);
  return response.json();
}

export async function fetchAlbumPhotos(albumId) {
  const response = await fetch(`${API_BASE}/albums/${albumId}/photos`);
  return response.json();
}
