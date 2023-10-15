function Card() {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-full">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
                    Electronics
                </span>
                <img className="w-full h-full object-cover rounded-lg " src="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg" alt="headphones" />
                <div className="absolute top-0 bg-white right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1">+</div>
                <p className="flex justify-between align-middle">
                    <span className="text-sm font-light">Headphone</span>
                    <span className="text-lg font-medium">$300</span>
                </p>
            </figure>
        </div>
    );
}

export { Card }