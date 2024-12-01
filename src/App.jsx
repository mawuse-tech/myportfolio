
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import DashboardLayout from './components/Dashboard/DashboardLayouts';
import Resume from './components/DashboardLayouts/Resume';
import About from './components/About';
import Contact from './components/DashboardLayouts/Contact';
import Fun from './components/DashboardLayouts/Fun';
import MyWork from './components/MyWork';



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
          path: "contact",
          element: <Contact/>
        },

        {
          path: "mywork",
          element: <MyWork/>
        },
        
        {
          path: "fun",
          element: <Fun/>
        }
      ]

    }
  ]);

  return <RouterProvider router={router} />;
  
  
}

export default App
