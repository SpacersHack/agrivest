import { Route, Routes } from 'react-router-dom';
import Sidebar from './layout/sidebar';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<p>login</p>} />
      <Route path='/register' element={<p>register</p>} />
      <Route path='/' element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path='support' element={<p className='h-full w-full'>support</p>} />
        <Route path='settings' element={<p className='h-full w-full'>settings</p>} />

      </Route>
    </Routes>
  );
}

export default App;
