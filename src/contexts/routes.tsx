import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { GlobalContextProvider } from ".";
import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { MyOrders } from "../pages/MyOrders";
import { MyOrder } from "../pages/MyOrder";
import { SignIn } from "../pages/SignIn";
import { NotFound } from "../pages/NotFound";
import { ProductDetail } from "../components/ProductDetail/index.module";

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
    ]);
    return routes;
}

const routeContext = React.createContext({});

function AppRoutesProvider() {
    return (
        <routeContext.Provider value={{}}>
            <BrowserRouter>
                <GlobalContextProvider>
                    <Navbar></Navbar>
                    <ProductDetail></ProductDetail>
                    <Layout>
                        <AppRoutes />
                    </Layout>
                </GlobalContextProvider>
            </BrowserRouter>
        </routeContext.Provider>
    );
}

export { AppRoutesProvider };
