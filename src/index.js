import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Countrys from './pages/Countrys';
import Groups from './pages/Groups';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App id="app"/>}>
        <Route path="/countries" element={<Countrys />} />
        <Route path="/:country" element={<Groups />} />
      </Route>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

