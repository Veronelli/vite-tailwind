import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../components/Navbar';

import './App.css';
import { Layout } from '../../components/Layout';

function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/my-account",
      element: <MyAccount />
    },
    {
      path: "/my-orders",
      element: <MyOrders />
    },
    {
      path: "/my-order",
      element: <MyOrder />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "*",
      element: <NotFound />
    },
  ])
  return routes;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App
