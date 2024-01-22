import { Route, Routes } from 'react-router-dom';
import LoginLayout from "./layouts/LoginLayout";
import AdminLayout from "./layouts/AdminLayout";
import LoginUser from './pages/Login';
import Error from './pages/Error';
import AdminHome from './pages/admin/Home'


function App() {
  return (
      <main>
        <Routes>
          {/* public routes */}
          <Route element={<LoginLayout />}>
            <Route  path="/" element={<LoginUser />}  layout={LoginLayout} >Login</Route>
            <Route  path="*" element={<Error />} >Error</Route>
          </Route>
          {/* admin routes */}
          <Route element={<AdminLayout />}>
            <Route  path='/admin/home' element={<AdminHome />} >Home</Route>
          </Route>
        </Routes>
      </main>
  );
}

export default App;
