import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Layout from './LayoutComponent/Layout'
import HomePage from './LayoutComponent/HomeComponent/HomePage'
import Cart from './CartComponents/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
    ]
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App