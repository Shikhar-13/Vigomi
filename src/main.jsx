import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Components
import Navbar from './components/nav.jsx';
import Form from './components/form.jsx';
import Services from './components/services.jsx';
import Topdown from './components/topdown.jsx';
import TermsAndConditions from './pages/TnC.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
      <Route path="/Home" element={<App />} ></Route>
        <Route path="/Services" element={<Services />} />
        <Route path="/tnc" element={<TermsAndConditions />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
