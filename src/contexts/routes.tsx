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
import { MyOrderList } from "../pages/MyOrderList";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";
import { ProductDetail } from "../components/ProductDetail/index.module";
import { SideBar } from "../components/Sidebar";
import { CheckoutDetail } from "../components/CheckoutDetail";
import { HomeCategory } from "../pages/Home/:category";

function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <HomeCategory />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrders />,
    },
    {
      path: "/my-orders",
      element: <MyOrderList />,
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
  const [selectedOrderList, setSelectedOrderList] = useState<any>([]);

  return (
    <routeContext.Provider value={{ orderList, setOrderList, selectedOrderList, setSelectedOrderList }}>
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
