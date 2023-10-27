import React from "react";
import {
  GlobalContextProvider,
  TGlobalContext,
  globalContext,
} from "../../contexts";
import { CheckIcon, PlusSmallIcon } from "@heroicons/react/20/solid";

type ICategoryProduct = {
  id: number;
  createdAt: string;
  image: string;
  name: string;
  updatedAt: string;
};
export type IProductInventory = {
  id: number;
  category: ICategoryProduct;
  title: string;
  createdAt: string;
  price: number;
  images: string[];
  description?: string;
};

function Card({ product }: { product: IProductInventory }) {
  const {
    incrementCounter,
    openProductDetail,
    setProductDetail,
    setCartProducts,
    cartProducts,
  } = React.useContext<TGlobalContext>(globalContext);

  const openProduct = (): void => {
    setProductDetail!(product);
    openProductDetail!();
  };

  const addProductToCart = (): void => {
    if (!isChecked) {
      setCartProducts([...cartProducts, product]);
      incrementCounter!();
    }
  };

  const isChecked = React.useMemo(() => {
    return (
      cartProducts?.findIndex(
        (productItem: IProductInventory) => productItem.id === product.id
      ) !== -1
    );
  }, [cartProducts]);

  return (
    <div
      className="bg-white h-full cursor-pointer w-56 h-60 rounded-lg"
      onClick={openProduct}
    >
      <figure className="relative mb-2 w-full h-full">
        <span className="absolute left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          {product?.category?.name}
        </span>
        <img
          className="w-full object-cover rounded-lg "
          src={product.images[0]}
          alt="headphones"
        />
        <div
          className="absolute top-0 bg-white right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1"
          onClick={() => addProductToCart()}
        >
          {!isChecked && (
            <PlusSmallIcon className="w-6 h-6 text-black"></PlusSmallIcon>
          )}
          {isChecked && <CheckIcon className="w-6 h-6 text-black"></CheckIcon>}
        </div>
        <p className="flex justify-between align-middle">
          <span className="text-sm font-light">{product.title}</span>
          <span className="text-lg font-medium">${product.price}</span>
        </p>
      </figure>
    </div>
  );
}

export { Card };
