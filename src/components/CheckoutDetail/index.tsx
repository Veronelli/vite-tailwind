import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { TGlobalContext, TOrderList, globalContext } from "../../contexts";
import { OrderCard } from "../OrderCard";
import { IProductInventory } from "../Card";
import totalPrice from "../../utils/total-price";
import { Link } from "react-router-dom";
import { AppRoutesProvider, routeContext } from "../../contexts/routes";

function CheckoutDetail() {
  const {
    closeProductDetail,
    cartProducts,
    setCartProducts,
    restartCounter,
  } = React.useContext<TGlobalContext>(globalContext);
  const {
    setOrderList,
    orderList,} = React.useContext(routeContext);

  const handleCheckout = () => {
    const checkoutProducts = cartProducts
    const orderToAdd: TOrderList = {
      date: "01.02.23",
      products: checkoutProducts,
      totalProducts: cartProducts?.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrderList([...orderList, orderToAdd]);
    setCartProducts([]);
    restartCounter();
  };

  return (
    <>
      <div id="detail-product" className="min-h-0 overflow-scroll">
        <div className="flex justify-between items-center p-6 sticky top-0 bg-slate-50 rounded-se-lg rounded-ss-lg">
          <h2 className="font-medium text-xl">My Order</h2>
          <div onClick={closeProductDetail} className="cursor-pointer">
            <XMarkIcon className="h-6 w-6 text-black" />
          </div>
        </div>
        <div
          className="flex flex-col justify-between"
          style={{ height: "85.5vh" }}
        >
          <div className="block overflow-x-auto px-2">
            {cartProducts?.map((product: IProductInventory, index: number) => {
              return (
                <OrderCard index={index} product={product} key={product.id} />
              );
            })}
          </div>
          <div>
            <hr />
            <p className="p-4 flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="font-extrabold">
                $ {totalPrice(cartProducts)}
              </span>
            </p>
            <div className="mx-2">
              <Link to="/my-orders">
                <button
                  onClick={() => handleCheckout()}
                  className="flex justify-center w-full rounded-lg bg-black py-2"
                >
                  <span className="text-white">Checkout</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CheckoutDetail };
