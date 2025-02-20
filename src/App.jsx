import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Information from './components/Information/Information'
import INAB from './components/Information/INAB'
import Theme from './components/Theme'
import Committee from './components/Committee'

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
    path: "/theme",
    element:<Theme/>
  },
  {
    path: "/committee",
    element:<Committee/>
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
