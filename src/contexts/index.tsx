import React, { useState } from "react";
import { IProductInventory } from "../components/Card";
import axios from "axios";

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
  restartCounter?: () => void;
  productList?: IProductInventory;
  productListFiltred?:IProductInventory[];
  setProductListFiltred?: ()=>void;
  setProductList?: () => void;
  searchFilter?: string;
  setSearchFilter?: () => void;
};
export type TOrderList = {
  date: String;
  products?: Array<IProductInventory>;
  totalProducts?: Number;
  totalPrice: Number;
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
  const restartCounter = () => {
    setCount(0);
  };
  return { count, incrementCounter, decreaseCounter, restartCounter };
};

function GlobalContextProvider({ children }: any) {
  const [productList, setProductList] = React.useState([]);
  const [productListFiltred, setProductListFiltred] = React.useState([]);
  const [searchFilter, setSearchFilter] = React.useState("");

  const {
    count,
    incrementCounter,
    decreaseCounter,
    restartCounter,
  }: TGlobalContext = useCounter();
  const [isOpenSideBar, setIsOpenSideBar] = useState<SideBarAction>(
    SideBarAction.Close
  );
  const [productDetail, setProductDetail] = useState<IProductInventory>();
  const [cartProducts, setCartProducts] = useState([]);

  const openProductDetail = () => setIsOpenSideBar(SideBarAction.ProductDetail);
  const closeProductDetail = () => setIsOpenSideBar(SideBarAction.Close);
  const openCheckoutDetail = () =>
    setIsOpenSideBar(SideBarAction.CheckoutDetail);

  const filtredByTitleId = (items: any[], sectionName: string) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(sectionName.toLowerCase())
    );
  };

  React.useEffect(() => {
    async function getProductList() {
      const _productList = (
        await axios.get("https://api.escuelajs.co/api/v1/products")
      ).data;
      setProductList(_productList);
    }
    getProductList();
  }, []);
  React.useEffect(() => {
    if (searchFilter)
      setProductListFiltred(filtredByTitleId(productList, searchFilter));
    else
      setProductListFiltred(productList)
  }, [productList, searchFilter]);

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
        restartCounter,
        productList,
        setProductList,
        searchFilter,
        setSearchFilter,
        productListFiltred
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export { GlobalContextProvider, globalContext };
