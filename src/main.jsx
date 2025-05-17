import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router";
import HomeLayout from './components/Layouts/HomeLayout.jsx';
import routes from './components/routes/Routes.jsx';
import AuthProvider from './components/Auth/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={routes} /></AuthProvider>
  </StrictMode>,
)


