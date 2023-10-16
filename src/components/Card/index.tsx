type ICategoryProduct = {
    id: number;
    createdAt: string;
    image: string;
    name: string;
    updatedAt: string;
}
export type IProductInventory = {
    id: number;
    category: ICategoryProduct;
    title: string;
    createdAt: string;
    price: number;
    images: string[];
}

function Card({product}: {product: IProductInventory}) {
    return (
        <div className="bg-white h-full cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-full">
                <span className="absolute bottom-8 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
                    {product?.category?.name}
                </span>
                <img className="w-full object-cover rounded-lg " src={product.images[0]} alt="headphones" />
                <div className="absolute top-0 bg-white right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1">+</div>
                <p className="flex justify-between align-middle">
                    <span className="text-sm font-light">{product.title}</span>
                    <span className="text-lg font-medium">${product.price}</span>
                </p>
            </figure>
        </div>
    );
}

export { Card }