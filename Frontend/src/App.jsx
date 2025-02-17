import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Information from './components/Information/Information'
import Login from './components/Login'
import Signup from './components/Signup'
import INAB from './components/Information/INAB'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path: "/information",
    element:<Information/>
  },
  {
    path: "/advisory-board",
    element:<INAB/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
