import { Outlet } from 'react-router-dom';
import Nav from '../layout/nav/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
