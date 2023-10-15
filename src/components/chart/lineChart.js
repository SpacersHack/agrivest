import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const LineChartView = () => {
  const data = [
    {
      "name": "Jan",
      "seed": 4000,
      "soil": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "seed": 3000,
      "soil": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "seed": 2000,
      "soil": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "seed": 2780,
      "soil": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "seed": 1890,
      "soil": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "seed": 2390,
      "soil": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "seed": 3490,
      "soil": 4300,
      "amt": 2100
    },
    {
      "name": "Aug",
      "seed": 3490,
      "soil": 4300,
      "amt": 2100
    },
    {
      "name": "Sept",
      "seed": 3490,
      "soil": 300,
      "amt": 2100
    }
  ]
  return (
    <div className=''>
      <h3 className="my-3 ml-6">Sales Analytics</h3>

      <ResponsiveContainer width={"100%"} height={360}>
        <LineChart width={730} height={250} data={data}
          style={{ fontSize: 14 }}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="soil" stroke="#ffda79" />
          <Line type="monotone" dataKey="seed" stroke="#2d9f86" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartView



// const renderLineChart = (
//   <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//   </LineChart>
// );