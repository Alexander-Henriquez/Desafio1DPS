import React, { useState } from 'react';

// Definición del componente Headers
export const Headers = ({
    // Props recibidas desde el componente padre
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    onConfirmPurchase,
}) => {
    // Definición del estado local 'active' y función 'setActive' para controlar la visibilidad del carrito
    const [active, setActive] = useState(false);

    // Función para eliminar un producto del carrito
    const onDeleteProduct = product => {
        // Filtrar los productos para obtener un nuevo array sin el producto eliminado
        const results = allProducts.filter(item => item.id !== product.id);
        // Actualizar el total restando el precio del producto eliminado multiplicado por su cantidad
        setTotal(total - product.price * product.quantity);
        // Actualizar el contador de productos restando la cantidad del producto eliminado
        setCountProducts(countProducts - product.quantity);
        // Actualizar la lista de productos eliminando el producto
        setAllProducts(results);
    };

    // Función para limpiar todo el carrito
    const onCleanCart = () => {
        // Vaciar la lista de productos
        setAllProducts([]);
        // Restablecer el total a cero
        setTotal(0);
        // Restablecer el contador de productos a cero
        setCountProducts(0);
    };

    // Renderizado del componente Headers
    return (
        <header>
            <h1>Tienda de Teclados</h1>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    {/* Icono del carrito con contador de productos */}
                    <img src="https://img.freepik.com/vector-premium/icono-carrito-compras-rapido_414847-513.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1708300800&semt=ais" alt="carrito" className="icon-cart" />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>
                {/* Contenedor del carrito */}
                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {allProducts.length ? (
                        <>
                            {/* Listado de productos en el carrito */}
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product' key={product.id}>
                                        {/* Información del producto en el carrito */}
                                        <div className='info-cart-product'>
                                            <span className='cantidad-producto-carrito'>
                                                {product.quantity}
                                            </span>
                                            <p className='titulo-producto-carrito'>
                                                {product.title}
                                            </p>
                                            <span className='precio-producto-carrito'>
                                                ${product.price}
                                            </span>
                                        </div>
                                        {/* Icono para eliminar el producto del carrito */}
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                            alt="cerrar"
                                            className="icon-close"
                                            onClick={() => onDeleteProduct(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Total a pagar y botones de vaciar carrito y confirmar compra */}
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                            <button className='btn-clear-all' onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                            <button className='btn-confirm-purchase' onClick={onConfirmPurchase}>
                                Confirmar Compra
                            </button>
                        </>
                    ) : (
                        // Mensaje si el carrito está vacío
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};

