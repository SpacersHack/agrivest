import React from 'react';
import LineChartView from '../components/dashboard/chart/lineChart';
import Overview from '../components/dashboard/overview';
import Products from '../components/dashboard/products';

const overView = [
  {
    name: 'Total Income',
    amount: 5525,
    margin: 8.2,
    iconName: 'currency',
  },
  {
    name: 'Total Expenses',
    amount: 5525,
    margin: -8.2,
    iconName: 'chart',
  },
  {
    name: 'Total profit',
    amount: 5525,
    margin: 8.2,
    iconName: 'percent',
  },
];

const Dashboard = () => {
  return (
    <section className="px-4">
      <aside className="mb-6">
        <h3 className="font-semibold text-[20px]">Welcome, David</h3>
        <p className="text-sm text-gray-400">
          Have a great day with your customers
        </p>
      </aside>
      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8">
          <article className="lg:flex items-center mb-6 gap-6">
            {overView.map((view, id) => (
              <Overview view={view} />
            ))}
          </article>
          <article className=" bg-white rounded-lg py-3 px-2">
            <LineChartView />
          </article>
        </section>
        <Products />
      </div>
    </section>
  );
};

export default Dashboard;
