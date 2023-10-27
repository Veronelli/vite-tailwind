import { XMarkIcon } from "@heroicons/react/20/solid";
import { IProductInventory } from "../Card";
import { TGlobalContext, globalContext } from "../../contexts";
import React from "react";

function OrderCard({
  product,
  index,
}: {
  product: IProductInventory;
  index: number;
}) {
  const { cartProducts, setCartProducts, decreaseCounter } =
    React.useContext<TGlobalContext>(globalContext);

  const updateProduct = () => {
    const productsData = cartProducts.filter(
      (productItem: IProductInventory) => productItem.id !== product.id
    );
    setCartProducts(productsData);
    decreaseCounter()
  };

  return (
    <div className="flex justify-between items-center py-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={product.images[0]}
          />
        </figure>
        <p className="text-sm font-light ">{product.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${product.price}</p>
        <XMarkIcon
          onClick={() => updateProduct()}
          className="h-6 w-6 text-black cursor-pointer"
        ></XMarkIcon>
      </div>
    </div>
  );
}

export { OrderCard };
