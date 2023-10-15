import React from 'react';
import iconType from '../../utils/iconType';

const Overview = ({ view }) => {
  return (
    <aside className="my-4 lg:my-0 bg-white py-3 px-2 rounded-lg w-full">
      <div className="flex">
        <p className="h-12 w-12 overflow-hidden flex justify-center items-center bg-gray-100 rounded-full">
          {iconType(view.iconName)}
        </p>
        <p className="ml-3">
          <span className="block my-0 font-semibold text-[18px]">
            ${view.amount}
          </span>
          <span className="block text-[12px] text-gray-400 my-0">
            {view.name}
          </span>
        </p>
      </div>
      <p className="h-2 w-full bg-gray-100 mt-6 rounded-lg"></p>
    </aside>
  );
};

export default Overview;
