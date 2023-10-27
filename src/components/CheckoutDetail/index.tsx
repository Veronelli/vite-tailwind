import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { TGlobalContext, globalContext } from "../../contexts";
import { OrderCard } from "../OrderCard";
import { IProductInventory } from "../Card";

function CheckoutDetail() {
  const { closeProductDetail, cartProducts } =
    React.useContext<TGlobalContext>(globalContext);

  return (
    <>
      <div id="detail-product" className="min-h-0 overflow-scroll">
        <div className="flex justify-between items-center p-6 sticky top-0 bg-slate-50 rounded-se-lg rounded-ss-lg">
          <h2 className="font-medium text-xl">My Order</h2>
          <div onClick={closeProductDetail} className="cursor-pointer">
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <div className="px-2">
          {cartProducts?.map((product: IProductInventory, index: number) => {
            return (
              <OrderCard index={index} product={product} key={product.id} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export { CheckoutDetail };
