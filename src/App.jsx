import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router'

const routs = createBrowserRouter([
  {path:'/UT_react_blog', element: <Home />},
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
