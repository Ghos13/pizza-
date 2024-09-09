import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/cart/cart";
import NotFaund from "./pages/NotFaund/NotFaund";
import Menu from "./pages/menu/menu";
import Layout from "./Components/layout/layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFaund />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
