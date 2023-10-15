import React from 'react'
import DashboardIcon from '../../assets/icons/dashboard'
import { NavLink } from 'react-router-dom';
import iconType from '../../utils/iconType';
import cls from 'classnames'

const navItems = [
  {
    name: 'dashboard',
    path: '',
    icon: 'dashboard',
  },
  {
    name: 'Properties',
    path: 'properties',
    icon: 'Properties',
  },
  {
    name: 'products',
    path: 'products',
    icon: 'products',
  },
  {
    name: 'customers',
    path: 'customers',
    icon: 'customers',
  },
  {
    name: 'reports',
    path: 'reports',
    icon: 'reports',
  },
];

const navFooter = [
  {
    name: 'settings',
    path: 'settings',
    icon: 'settings',
  },
  {
    name: 'support',
    path: 'support',
    icon: 'help',
  },
  {
    name: 'logout',
    path: 'logout',
    icon: 'logout',
  },
]


export const SideBar = () => {
  return (
    <header className="h-full bg-white w-[240px] shadow-md">
      <nav className="flex flex-col justify-between bg-white h-full">
        <section>

          <ul className="my-4 py-3 font-poppins">
            <h3 className=" uppercase px-5 mb-4  font-bold text-agrivest font-['Young_Serif']">
              Agrivest
            </h3>
            {
              navItems.map((items, id) => (
                <NavLink
                  to={`/${items.path}`}
                  className={({ isActive }) => isActive ? cls("text-white bg-agrivest ", "flex items-center rounded-r-xl py-3 px-5 my-2 text-sm ") : "py-3 text-black px-5 my-2  flex items-center text-sm"}
                  key={id}>
                  <p>{iconType(items.icon)}</p>
                  <p className='mx-3  capitalize'>{items.name}</p>
                </NavLink>
              ))
            }
          </ul>
        </section>
        <section>
          <ul className="my-4 py-3">
            {
              navFooter.map((items, id) => (
                <NavLink
                  to={`/${items.path}`}
                  className={({ isActive }) => isActive ? cls("text-white bg-agrivest ", "flex items-center rounded-r-xl py-3 px-5 my-2 text-sm ") : "py-3 text-black px-5 my-2  flex items-center text-sm"}

                  key={id}>
                  {iconType(items.icon)}
                  <p className='mx-2 capitalize'>{items.name}</p>
                </NavLink>
              ))
            }
          </ul>
        </section>
      </nav>
    </header>
  )
}
