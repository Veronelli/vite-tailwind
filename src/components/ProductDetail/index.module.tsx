import { CheckIcon, PlusSmallIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { TGlobalContext, globalContext } from "../../contexts";
import style from "./style.module.css";
import { IProductInventory } from "../Card";

function ProductDetail() {
  const {
    closeProductDetail,
    productDetail,
    incrementCounter,
    setCartProducts,
    cartProducts,
  } = React.useContext<TGlobalContext>(globalContext);

  const isChecked = React.useMemo(() => {
    return (
      cartProducts?.findIndex(
        (productItem: IProductInventory) => productItem.id === productDetail.id
      ) !== -1
    );
  }, [cartProducts, productDetail]);

  const addProductToCart = (): void => {
    if (!isChecked) {
      setCartProducts([...cartProducts, productDetail]);
      incrementCounter!();
    }
  };

  return (
    <>
      <div id="detail-product" className="min-h-0 overflow-scroll">
        <div className="flex justify-between items-center p-6 sticky top-0 bg-slate-50 rounded-se-lg rounded-ss-lg">
          <h2 className="font-medium text-xl">Detail</h2>
          <div onClick={closeProductDetail} className="cursor-pointer">
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <figure className="px-2">
          <img
            src={productDetail?.images[0]}
            alt=""
            className="w-full h-full rounded-lg"
          />
        </figure>
        <p className="flex flex-col px-2">
          <span className="mt-4">${productDetail?.price}</span>
          <span className="text-2xl font-bold ">{productDetail?.title}</span>
          <span className="font-light p-2 bg-slate-100 mt-1 rounded-lg">
            {productDetail?.description}
          </span>
        </p>
      </div>
      <div id="button-detail-product" className="px-2 sticky bottom-2">
        <button
          onClick={() => addProductToCart()}
          className="flex justify-center w-full rounded-lg bg-black py-2 "
        >
          <span className="text-white">
            {isChecked && "Added"}
            {!isChecked && "Add"}
          </span>
          {!isChecked && <PlusSmallIcon className="w-6 h-6 text-white" />}
          {isChecked && <CheckIcon className="w-6 h-6 text-white" />}
        </button>
      </div>
    </>
  );
}

export { ProductDetail };
