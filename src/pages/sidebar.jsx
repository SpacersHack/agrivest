import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/sidebar';

const Sidebar = () => {
  const navItems = [
    {
      name: 'dashboard',
      path: '/',
      icon: '',
    },
  ];

  return (
    <section className="w-screen h-screen">
      <SideBar />
      <main className="overflow-y-scroll">
        <Outlet />
      </main>
    </section>
  );
};

export default Sidebar;
