import React, { useState } from 'react';
import { useShopInfo } from '../../hooks/useContext/useShopInfo';

export default function SingleItemDetail({ el, setSelectedItem }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const { setProductsForOdrder, setShowContentForShoppingList } = useShopInfo()


    return (
        <div className="p-4 w-[70vw] h-fit ">
            <div className='flex'>
                <div className="relative flex flex-col items-center justify-end w-1/2">
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % el.productImages.length)}
                        className="absolute left-0 z-10 text-7xl bg-opacity-50 text-white px-3 py-4 rounded hover:bg-opacity-70"
                    >
                        ←
                    </button>

                    <img
                        src={el.productImages[currentIndex].imagePath}
                        alt={`Image ${currentIndex + 1}`}
                        className="h-200 w-120 rounded-md object-cover"
                    />

                    <button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + el.productImages.length) % el.productImages.length)}
                        className="absolute right-0 z-10 bg-opacity-50 text-7xl text-white px-3 py-4 rounded hover:bg-opacity-70"
                    >
                        →
                    </button>
                    <p className="text-sm text-gray-600">
                        Zdjęcie {currentIndex + 1} z {el.productImages.length}
                    </p>
                </div>


                <div className='p-4 flex flex-col justify-between w-1/2'>
                    <h1 className="text-5xl text-slate-700 font-bold p-5">{el.name}</h1>
                    <div>
                        <div className="flex items-center gap-4 p-5">
                            <button
                                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                className="text-3xl text-white p-3 flex justify-center items-center w-15 h-15 bg-slate-700 rounded hover:bg-slate-800"
                            >
                                -
                            </button>
                            <span className="text-xl p-3 flex justify-center items-center w-15 h-15">{quantity}</span>
                            <button
                                onClick={() => setQuantity((prev) => Math.min(prev + 1, el.quantityInStock))}
                                className="text-3xl text-white p-3 flex justify-center items-center w-15 h-15 bg-slate-700 rounded hover:bg-slate-800"
                            >
                                +
                            </button>
                        </div>
                        <p className="text-lg text-gray-600 px-5">Na stanie: {el.quantityInStock} szt.</p>
                    </div>


                    <div
                        className="prose max-w-none p-5"
                        dangerouslySetInnerHTML={{ __html: el.description }}
                    />
                    <p className="text-xl text-slate-700 font-bold p-5">{el.price}</p>
                    <button onClick={() => (setProductsForOdrder(prev => [
                        ...prev,
                        {
                            productId: el.id,
                            quantity: quantity,
                            name: el.name,
                            image: el.productImages[0].imagePath
                        }
                    ]), setSelectedItem(null), setShowContentForShoppingList(true))}
                        className="ml-auto mr-auto rounded border-3 border-slate-700 bg-white p-2 pr-4 pl-4 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
                    >
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
}
