import { Route, Routes } from 'react-router-dom';
import Sidebar from './pages/sidebar';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<p>login</p>} />
      <Route path='/register' element={<p>register</p>} />
      <Route path='/' element={<Sidebar />}>
        <Route index element={<p>hi there</p>} />

      </Route>
    </Routes>
  );
}

export default App;
