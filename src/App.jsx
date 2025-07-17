
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from "./features/Auth/Login";
import PageNotfound from './features/Auth/PageNotfound';
// import Register from "./features/Auth/Register";
// import ForgotPassword from './features/Auth/ForgotPassword';
// import ResetPassword from './features/Auth/ResetPassword';
import AdminRouters from './Routers/AdminRouters';
import SellerRouters from './Routers/SellerRouters';
import ProtectedRoute from "./features/Auth/ProtectedRoute";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000}/>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Signup" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/resetPassword" element={<ResetPassword/>} /> */}
        {/* Admin Routes */}
        <Route path='/admin/*' element={<ProtectedRoute>
          <AdminRouters />
         </ProtectedRoute>} />
        <Route path='/seller/*'element={<ProtectedRoute>
          <SellerRouters/>
        </ProtectedRoute>} />
        <Route path='/*' element={
          <PageNotfound/>
        } />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

