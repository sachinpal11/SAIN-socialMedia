import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Routes/Home.jsx'
import CreatePost from './Routes/CreatePost.jsx'
import FaceBookStore from './Store/index.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([{
  path: "/", element: <App />, children: [
    { path: "/", element: <Home /> },
    { path: "/create-post", element: <CreatePost /> }]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={FaceBookStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
