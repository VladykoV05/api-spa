import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserPage from './pages/UserPage';
import UserDetailPage from './pages/UserDetailPage';
import AlbumPage from './pages/AlbumPage';
import AlbumDetailPage from './pages/AlbumDetailPage';
import PageNotFound from './pages/PageNotFound';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
        <Route path="/albums" element={<AlbumPage />} />
        <Route path="/albums/:albumId" element={<AlbumDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
