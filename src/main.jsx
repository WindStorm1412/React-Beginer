import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style/global.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';
import ProductPage from './pages/products.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/users",
    element: <UsersPage/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
