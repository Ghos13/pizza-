import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='Layout'>
     <div className='saidbar'>
    <Link to = "/" > menu</Link>
    <Link to="/cart">carg</Link>
     </div>
      <>
      <Outlet/>
      </>

    </div>
  );
}

export default Layout;
