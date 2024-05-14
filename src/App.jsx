import React from 'react'

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'
import Layout from './LayoutComponent/Layout'
import HomePage from './LayoutComponent/HomeComponent/HomePage'
import Cart from './CartComponents/Cart'
import Men from './MenComponents/Men'
import Jewelery from './JeweleryComponent/Jewelery'
import Electronics from './ElectronicsComponents/Electronics'
import WomenCloth from './WomenComponents/WomenCloth'


const router = createHashRouter([
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
      {
        path: "mencloth",
        element: <Men/>,
      },
      {
        path: "jewelery",
        element: <Jewelery/>,
      },
      {
        path: "electronics",
        element: <Electronics/>,
      },
      {
        path: "women'sclothing",
        element: <WomenCloth/>,
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