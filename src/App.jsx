import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Members from './pages/Members';
import { createBrowserRouter, RouterProvider } from 'react-router'

const routs = createBrowserRouter([
  {path:'UT_react_blog', element: <Home />},
  {path:'UT_react_blog/members', element: <Members />},
  {path:'*', element: <NotFound />},
])

function App() {
  return (
    <div>
      <RouterProvider router={routs}/>
    </div>
  )
}

export default App
