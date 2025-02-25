import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Information from './components/Information/Information'
import INAB from './components/Information/INAB'
import Theme from './components/Theme'
import AcademicCommittee from './components/AcademicCommittee'
import StudentCommittee from './components/StudentCommittee'

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
    path: "/academic-committee",
    element:<AcademicCommittee/>
  },
  {
    path: "/student-committee",
    element:<StudentCommittee/>
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
