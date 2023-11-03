import { Card, IProductInventory } from "../../components/Card";

import axios from "axios";
import React from "react";
import { globalContext } from "../../contexts";

function Home() {
  const {
    productListFiltred,
    setCategoryName,
    setProductList,
    searchFilter,
    setSearchFilter,
  } = React.useContext(globalContext);

  React.useEffect(() => {
    setCategoryName(null);
  }, []);
  const changeSearchFilter = (event: any) => {
    setSearchFilter(event.target.value);
  };

  return (
    <>
      <div className="">
        <h1 className="text-lg font-bold ml-1">Home</h1>
        <input
          type="text"
          className="rounded-lg border-black border-2 p-2 focus:outline-none mb-4"
          value={searchFilter}
          onChange={(event) => changeSearchFilter(event)}
          placeholder="Search Product"
        />
        {productListFiltred?.length <= 0 && (
          <div>We Don't have any "{searchFilter}"</div>
        )}
        {productListFiltred?.length > 0 && (
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {productListFiltred &&
              productListFiltred?.map((product: IProductInventory) => (
                <Card key={product.id} product={product}></Card>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export { Home };
