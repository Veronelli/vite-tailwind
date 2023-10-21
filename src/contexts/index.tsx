import React, { useState } from "react";
import { IProductInventory } from "../components/Card";

export type TGlobalContext = {
  count?: number;
  incrementCounter?: () => void;
  isProductDetailOpen?: boolean;
  openProductDetail?: () => void;
  closeProductDetail?: () => void;
  productDetail?: IProductInventory;
  setProductDetail?: (product: IProductInventory) => void;
};

const globalContext = React.createContext<TGlobalContext>({});

const useCounter = (): TGlobalContext => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return { count, incrementCounter };
};

function GlobalContextProvider({ children }: any) {
  const { count, incrementCounter }: TGlobalContext = useCounter();
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);
  const [productDetail, setProductDetail] = useState<IProductInventory>();

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <globalContext.Provider
      value={{
        count,
        incrementCounter,
        openProductDetail,
        productDetail,
        closeProductDetail,
        setProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export { GlobalContextProvider, globalContext };
