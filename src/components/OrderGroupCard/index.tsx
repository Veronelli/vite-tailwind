import { XMarkIcon } from "@heroicons/react/20/solid";
import { IProductInventory } from "../Card";
import React from "react";
import { routeContext } from "../../contexts/routes";
import { TOrderList } from "../../contexts";

function OrderGroupCard({ productGroup, index }: { productGroup: IProductInventory, index: Number }) {
  const { setOrderList, orderList } = React.useContext(routeContext);
  
  const removeProduct = ()=>{
    
    let removedProduct = [...orderList];
    removedProduct = removedProduct.filter((_, indexJ)=>indexJ !== index)
    setOrderList(removedProduct)
}
  return (
    <div className="flex justify-between items-center py-1 bg-slate-100 w-2/3 px-1 rounded-lg mb-2">
      <div className="flex items-center ">
        <figure className="w-40 h-20 relative">
          {productGroup.products?.map((product, index: number) => (
            <>
              {index < 3 && (
                <img
                  key={product.id}
                  className="w-20 h-20 rounded-lg object-cover absolute border-slate-100 border-4"
                  style={{ left: `${index * 40}px` }}
                  src={product.images[0]}
                />
              )}
            </>
          ))}
        </figure>
      </div>
      <div className="flex-1 mx-2 ">
        <table>
          <tr>
            <td className="w-40">
              <b>Total Products</b>
            </td>
            <td>{productGroup.totalProducts}</td>
          </tr>
          <tr>
            <td>
              <b>Created</b>
            </td>
            <td>{productGroup.date}</td>
          </tr>
        </table>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">
          <b>Total Price:</b> ${productGroup.totalPrice}
        </p>
      </div>

      <XMarkIcon className="h-6 w-6 text-black mx-2" onClick={()=>removeProduct()} />
    </div>
  );
}

export { OrderGroupCard };
