import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from "./routes/Routes";
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

