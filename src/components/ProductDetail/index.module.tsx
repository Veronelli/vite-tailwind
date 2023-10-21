import { XMarkIcon } from '@heroicons/react/20/solid';
import styles from './styles.module.css';
import React from 'react';
import { TGlobalContext, globalContext } from '../../contexts';

function ProductDetail(){
    const {closeProductDetail, isProductDetailOpen} = React.useContext<TGlobalContext>(globalContext)
    if (!isProductDetailOpen){
        return (
            <></>
        );
    }
    return (
        <aside  className={`flex flex-col fixed right-0 border border-black rounded-lg bg-white ${styles["product-detail"]}`}>
            <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={closeProductDetail}>
                    <XMarkIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </aside>
    )
}

export {ProductDetail};
