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
};

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

  return { count, incrementCounter, decreaseCounter };
};

function GlobalContextProvider({ children }: any) {
  const { count, incrementCounter, decreaseCounter }: TGlobalContext = useCounter();
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
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export { GlobalContextProvider, globalContext };
