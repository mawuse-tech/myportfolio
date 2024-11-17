
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import DashboardLayout from './components/Dashboard/DashboardLayouts';
import Resume from './components/DashboardLayouts/Resume';
import About from './components/About';
import Links from './components/DashboardLayouts/Links';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

    {
     path: "/about-us",
     element: <About/>
    },

    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
       index: true,
       element: <Resume/>
        },

        {
          path: "link",
          element: <Links/>
        }
      ]

    }
  ]);

  return <RouterProvider router={router} />;
  
  
}

export default App
