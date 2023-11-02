import React, { useState } from "react";
import { IProductInventory } from "../components/Card";

export type TGlobalContext = {
  count?: number;
  incrementCounter?: () => void;
  isOpenSideBar?: SideBarAction;
  openProductDetail?: () => void;
  closeProductDetail?: () => void;
  productDetail?: IProductInventory;
  setProductDetail?: (product: IProductInventory) => void;
  setCartProducts?: () => void;
  cartProducts?: [];
  openCheckoutDetail?: () => void;
  decreaseCounter?: () => void;
  restartCounter?: ()=>void;
};
export type TOrderList = {
  date: String,
  products?: Array<IProductInventory>,
  totalProducts?: Number,
  totalPrice: Number,
}


const globalContext = React.createContext<TGlobalContext>({});
export enum SideBarAction {
  Close,
  ProductDetail,
  CheckoutDetail,
}

const useCounter = (): TGlobalContext => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decreaseCounter = () => {
    setCount(count - 1);
  };
  const restartCounter = () => {
    setCount(0)
  }
  return { count, incrementCounter, decreaseCounter, restartCounter};
};

function GlobalContextProvider({ children }: any) {
  const { count, incrementCounter, decreaseCounter, restartCounter }: TGlobalContext =
    useCounter();
  const [isOpenSideBar, setIsOpenSideBar] = useState<SideBarAction>(
    SideBarAction.Close
  );
  const [productDetail, setProductDetail] = useState<IProductInventory>();
  const [cartProducts, setCartProducts] = useState([]);

  const openProductDetail = () => setIsOpenSideBar(SideBarAction.ProductDetail);
  const closeProductDetail = () => setIsOpenSideBar(SideBarAction.Close);
  const openCheckoutDetail = () =>
    setIsOpenSideBar(SideBarAction.CheckoutDetail);

  return (
    <globalContext.Provider
      value={{
        count,
        incrementCounter,
        openProductDetail,
        productDetail,
        closeProductDetail,
        setProductDetail,
        isOpenSideBar,
        cartProducts,
        setCartProducts,
        openCheckoutDetail,
        decreaseCounter,
        restartCounter
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export { GlobalContextProvider, globalContext };
