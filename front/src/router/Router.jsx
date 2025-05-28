import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Stats from '../pages/Stats/Stats';
import Profile from '../pages/profile/Profile';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Auth from '../pages/auth/Auth';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile') {
      document.body.classList.add('scroll-page');
      document.body.classList.remove('auth-page');
    } else if (location.pathname === '/') {
      document.body.classList.add('scroll-page');
      document.body.classList.remove('auth-page');
    } else if (location.pathname === '/auth') {
      document.body.classList.add('auth-page');
      document.body.classList.remove('scroll-page');
    } else {
      document.body.classList.remove('scroll-page');
      document.body.classList.remove('auth-page');
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
