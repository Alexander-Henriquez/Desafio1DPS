import React from 'react';
import '../Invoice.css';

export const Invoice = ({ allProducts, total, onClose }) => {
    return (
        <div className="invoice-container">
            {/* Encabezado de la factura */}
            <div className="invoice-header">
                <h2>Factura</h2>
            </div>
            {/* Detalles de la factura */}
            <div className="invoice-details">
                <h3>Productos Comprados:</h3>
                {/* Contenedor de los productos comprados */}
                <div className="invoice-products">
                    {/* Mapeo de los productos comprados */}
                    {allProducts.map(product => (
                        // Contenedor de cada producto
                        <div key={product.id} className="invoice-product">
                            {/* Título del producto */}
                            <div className="product-title">{product.title}</div>
                            {/* Cantidad del producto */}
                            <div className="product-info">Cantidad: {product.quantity}</div>
                            {/* Precio unitario del producto */}
                            <div className="product-info">Precio Unitario: ${product.price}</div>
                            {/* Total del producto (cantidad * precio unitario) */}
                            <div className="product-total">Total: ${product.quantity * product.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Total general de la factura */}
            <div className="invoice-total">
                <h3>Total General:</h3>
                {/* Valor total de la factura */}
                <p>${total}</p>
            </div>
            {/* Pie de la factura */}
            <div className="invoice-footer">
                {/* Botón para cerrar la factura */}
                <button onClick={onClose}>Cerrar Factura</button>
            </div>
        </div>
    );
};
