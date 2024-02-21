
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css'
import Signup_page from './signup_page.jsx';
import Login_page from './login_page.jsx';
import Page from './home_page.jsx';

const router = createBrowserRouter([{

  path:"/test-web/",
  element: <App></App>,
  children:[
  {
    path: "/test-web/",
    element: <Signup_page></Signup_page>
  },
  {
    path: "/test-web/login",
    element: <Login_page></Login_page>
  },
  {
    path: "/test-web/home",
    element: <Page></Page>
  },

]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
