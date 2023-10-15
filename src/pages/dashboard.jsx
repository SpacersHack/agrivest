import React from 'react';
import LineChartView from '../components/chart/lineChart';

const Dashboard = () => {
  return (
    <section className="px-4">
      <aside>
        <h3 className="font-semibold text-[20px]">Welcome, David</h3>
        <p className="text-sm text-gray-400">
          Have a great day with your customers
        </p>
      </aside>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <article className="flex items-center my-6 gap-6">
            <aside className="bg-white py-3 px-2 rounded-lg w-full">
              <div className="flex">
                <p className="h-12 w-12 bg-gray-100 rounded-full"></p>
                <p className="ml-3">
                  <span className="block my-0 font-semibold text-[18px]">
                    $5525
                  </span>
                  <span className="block text-[12px] text-gray-400 my-0">
                    Total income
                  </span>
                </p>
              </div>
              <p className="h-2 w-full bg-gray-100 mt-6 rounded-lg"></p>
            </aside>
            <aside className="bg-white py-3 px-2 rounded-lg w-full">
              <div className="flex">
                <p className="h-12 w-12 bg-gray-100 rounded-full"></p>
                <p className="ml-3">
                  <span className="block my-0 font-semibold text-[18px]">
                    $5525
                  </span>
                  <span className="block text-[12px] text-gray-400 my-0">
                    Total Expense
                  </span>
                </p>
              </div>
              <p className="h-2 w-full bg-gray-100 mt-6 rounded-lg"></p>
            </aside>
            <aside className="bg-white py-3 px-2 rounded-lg w-full">
              <div className="flex">
                <p className="h-12 w-12 bg-gray-100 rounded-full"></p>
                <p className="ml-3">
                  <span className="block my-0 font-semibold text-[18px]">
                    $5525
                  </span>
                  <span className="block text-[12px] text-gray-400 my-0">
                    Total profit
                  </span>
                </p>
              </div>
              <p className="h-2 w-full bg-gray-100 mt-6 rounded-lg"></p>
            </aside>
          </article>
          <article className=" bg-white rounded-lg py-3 px-2">
            <LineChartView />
          </article>
        </section>
        <article className="col-span-3 bg-white rounded-lg p-3">
          <h3 className="my-2">Top Properties</h3>
        </article>
      </div>
    </section>
  );
};

export default Dashboard;
