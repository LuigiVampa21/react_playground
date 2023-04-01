import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Error from './pages/Error'
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      // { path: '', element: <Home /> },
      {
        path: 'products',
        element: <Product />,
        // children: [
        // ]
      },
      { path: 'products/:id', element: <ProductDetails /> }
      // { path: '/products/:id', element: <Product /> }
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
