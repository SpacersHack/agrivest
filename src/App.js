import { Route, Routes } from 'react-router-dom';
import Sidebar from './layout/sidebar';
import Dashboard from './pages/dashboard';
import Login from './pages/auth/login';
import './App.css'
import Register from './pages/auth/register';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path='support' element={<p className='h-full w-full'>support</p>} />
        <Route path='settings' element={<p className='h-full w-full'>settings</p>} />
        <Route path='Properties' element={<p>Properties</p>} />
        <Route path='Products' element={<p>Products</p>} />
        <Route path='Customers' element={<p>Customers</p>} />
        <Route path='Reports' element={<p>Reports</p>} />

      </Route>
    </Routes>
  );
}

export default App;
