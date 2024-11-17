
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import DashboardLayout from './components/Dashboard/DashboardLayouts';
import Resume from './components/DashboardLayouts/Resume';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
       index: true,
       element: <Resume/>
        },
      ]

    }
  ]);

  return <RouterProvider router={router} />;
  
  
}

export default App
