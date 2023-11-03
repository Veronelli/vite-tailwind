import React from "react";
import { routeContext } from "../../contexts/routes";
import { OrderCard } from "../../components/OrderCard";
import { IProductInventory } from "../../components/Card";

function MyOrders() {
  const { selectedOrderList }: { selectedOrderList: IProductInventory } =
    React.useContext(routeContext);
  return (
    <>
      <div className="bg-red-100">MyOrders</div>
      <div className="flex justify-between items-center py-1 w-2/3 px-1 rounded-lg">
        <div className="flex-col w-full m-2">
          {selectedOrderList.map((order, index) => {
            return (
              <div className="my-2 bg-slate-100 py-2 px-3 rounded-lg">
                <OrderCard key={index * 10} product={order}></OrderCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { MyOrders };
