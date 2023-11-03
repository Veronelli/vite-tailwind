import React from "react";
import { TOrderList, globalContext } from "../../contexts";
import { OrderCard } from "../../components/OrderCard";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { routeContext } from "../../contexts/routes";
import { OrderGroupCard } from "../../components/OrderGroupCard";

function MyOrderList() {
  const { orderList, setOrderList } = React.useContext(routeContext);
  return (
    <>
      <div className="">
        <p className="">My Orders</p>
      </div>
      {orderList?.map((productGroup: TOrderList, index: Number) => {
        return (
          <>
            <OrderGroupCard
              productGroup={productGroup}
              index={index}
              key={index}
            />
          </>
        );
      })}
    </>
  );
}

export { MyOrderList };
