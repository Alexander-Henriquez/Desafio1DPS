"use client"; 
import React, { useState } from 'react';
import { Headers } from '@/app/components/Headers';
import { ProductList } from '@/app/components/ProductList';
import { Invoice } from '@/app/components/Invoice';

// Definición del componente funcional Home
export default function Home() {
    // Estado para almacenar todos los productos en el carrito
    const [allProducts, setAllProducts] = useState([]);
    // Estado para almacenar el total acumulado de la compra
    const [total, setTotal] = useState(0);
    // Estado para almacenar la cantidad total de productos en el carrito
    const [countProducts, setCountProducts] = useState(0);
    // Estado para controlar la visualización de la factura
    const [showInvoice, setShowInvoice] = useState(false);

    // Función para confirmar la compra
    const onConfirmPurchase = () => {
        setShowInvoice(true);
    };

    // Función para cerrar la factura
    const onCloseInvoice = () => {
        setShowInvoice(false);
    };

    // Renderizado del componente Home
    return (
        <>
            {/* Renderiza los componentes Headers y ProductList si no se muestra la factura */}
            {!showInvoice && (
                <>
                    {/* Componente Headers */}
                    <Headers
                        // Propiedades para el componente Headers
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                        onConfirmPurchase={onConfirmPurchase}
                    />
                    {/* Componente ProductList */}
                    <ProductList
                        // Propiedades para el componente ProductList
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                    />
                </>
            )}
            {/* Renderiza el componente Invoice si se muestra la factura */}
            {showInvoice && <Invoice allProducts={allProducts} total={total} onClose={onCloseInvoice} />}
        </>
    );
}






