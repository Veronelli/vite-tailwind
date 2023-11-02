import { Card, IProductInventory } from "../../components/Card"

import axios from "axios";
import React from "react";

function Home() {
    const [productList, setProductList] = React.useState([]);
    React.useEffect(() => {
        async function getProductList() {
            const _productList = (await axios.get("https://api.escuelajs.co/api/v1/products")).data;
            setProductList(_productList);
        }
        getProductList();
    }, [])
    return (
        <>
            <div className="">
                Home
                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {productList && productList?.map((product: IProductInventory) => (
                        <Card key={product.id} product={product}></Card>
                    )
                    )
                    }
                </div>
            </div>
        </>
    )
}

export { Home }