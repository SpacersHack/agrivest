import React from 'react'

export const SideBar = () => {
  return (
    <header className="h-full bg-white w-[200px] shadow-md">
      <nav className="flex flex-col justify-between bg-white h-full">
        <section>
          <h3 className="my-6 uppercase px-2 py-2 font-bold text-agrivest font-['Young_Serif']">
            Agrivest
          </h3>
          <ul className="my-4 py-3 font-poppins">
            <li className="py-3 px-5 my-2 bg-agrivest  text-white rounded-r-xl">
              Dashboard
            </li>
            <li className="py-3 px-5 my-2">Properties</li>
            <li className="py-3 px-5 my-2">Contacts</li>
            <li className="py-3 px-5 my-2">Listing</li>
            <li className="py-3 px-5 my-2">Clients</li>
            <li className="py-3 px-5 my-2">Reports</li>
          </ul>
        </section>
        <section>
          <ul className="my-4 py-3">
            <li className="py-3 px-5 my-2">Settings</li>
            <li className="py-3 px-5 my-2">Help</li>
            <li className="py-3 px-5 my-2">Log out</li>
          </ul>
        </section>
      </nav>
    </header>
  )
}
