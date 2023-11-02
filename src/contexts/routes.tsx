import React, { useState } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import {
  GlobalContextProvider,
  SideBarAction,
  TGlobalContext,
  TOrderList,
  globalContext,
} from ".";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { MyOrders } from "../pages/MyOrders";
import { MyOrder } from "../pages/MyOrder";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";
import { ProductDetail } from "../components/ProductDetail/index.module";
import { SideBar } from "../components/Sidebar";
import { CheckoutDetail } from "../components/CheckoutDetail";

function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}

const routeContext = React.createContext({});

function AppRoutesProvider() {
  const [orderList, setOrderList] = useState<Array<TOrderList>>([]);
  return (
    <routeContext.Provider value={{ orderList, setOrderList }}>
      <BrowserRouter>
        <GlobalContextProvider>
          <Navbar></Navbar>
          <SideBar>
            <globalContext.Consumer>
              {({ isOpenSideBar }) => {
                return (
                  <>
                    {isOpenSideBar === SideBarAction.ProductDetail && (
                      <ProductDetail />
                    )}
                    {isOpenSideBar === SideBarAction.CheckoutDetail && (
                      <CheckoutDetail />
                    )}
                  </>
                );
              }}
            </globalContext.Consumer>
          </SideBar>
          <Layout>
            <AppRoutes />
          </Layout>
        </GlobalContextProvider>
      </BrowserRouter>
    </routeContext.Provider>
  );
}

export { AppRoutesProvider, routeContext };
