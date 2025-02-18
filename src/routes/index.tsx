import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import List from './pages/list'
import Create from './pages/create'
import Detail from './pages/detail'

const router = createBrowserRouter([
  
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },

])

export default function Router() {
  return <RouterProvider router={router} />
}