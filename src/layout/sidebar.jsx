import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/sidebar';

const Sidebar = () => {
  return (
    <section className="w-screen h-screen overflow-hidden flex bg-zinc">
      <SideBar />
      <main className="overflow-y-scroll p-4 py-5 w-full font-poppins">
        <Outlet />
      </main>
    </section>
  );
};

export default Sidebar;
