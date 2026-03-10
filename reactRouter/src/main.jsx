import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Name from './components/Name/Name.jsx'
import GitHub from './components/GitHub/GitHub.jsx'
// const router =  createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children: [
//       {
//         path : "",
//         element:<Home />
//       },
//       {
//         path : "",
//         element:<Home />
//       },
//       {
//         path: "About",
//         element:<About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} ></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Contact' element={<Contact />} ></Route>
        <Route path='User/:userid' element={<User />} ></Route>
        <Route path='Name/:yourname' element={<Name />}></Route>
        <Route path='GitHub' element={<GitHub />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
