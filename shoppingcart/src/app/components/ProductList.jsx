import React, { useState, useEffect } from "react";
import { data } from "@/app/data";

export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            return setAllProducts([...products]);
        }
        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    };
    
    // Array de URLs de las imágenes del banner
    const bannerImageUrls = [
        'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/8c65be11-ddc7-4957-a246-880668b37ec7.c7a7e695525815a86e10b6e0d687ee85.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        'https://ae01.alicdn.com/kf/Hef27e65a616640c48d81d6936b218b96G.jpg_640x640Q90.jpg_.webp',
        'https://ae01.alicdn.com/kf/S527484fd08874ad9a3a7ca91871456c3I/Teclado-mec-nico-DYE-SUB-de-146-teclas-perfil-de-cereza-Japane-para-MX-Switch-G610.jpg',
        'https://ae01.alicdn.com/kf/H069cb24c231c4099b1179556e5eac1556.jpg_640x640Q90.jpg_.webp',
        'https://ae01.alicdn.com/kf/Hd515ba11cf1a44bb9c937991903e1f67u/G-MKY-145-Monster-japon-s-teclas-de-perfil-de-cereza-teclas-PBT-gruesas-por-sublimaci.jpg_960x960.jpg',
        'https://ae01.alicdn.com/kf/He5731f7aaa004f83a687592966335e30h/Teclas-Bento-de-G-MKY-para-Teclado-mec-nico-de-Gaming-teclas-Cherry-PBT-Dye-Subtion.jpg'
    ];

    // Estado para controlar el índice de la imagen actual en el banner
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Efecto para cambiar automáticamente la imagen del banner cada cierto tiempo
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % bannerImageUrls.length);
        }, 5000); // Intervalo de tiempo en milisegundos

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    }, [bannerImageUrls.length]);

    return (
        <>
            <div className="banner-container">
                {bannerImageUrls.map((imageUrl, index) => (
                    <img
                        key={index}
                        className={`banner-image ${index === currentImageIndex ? 'active' : ''}`}
                        src={imageUrl}
                        alt={`Banner ${index + 1}`}
                    />
                ))}
            </div>
            <div className="container-items">
                {data.map(product => (
                    <div className="item" key={product.id}>
                        <figure>
                            <img src={product.urlImage} alt={product.title} />
                        </figure>
                        <div className="info-product">
                            <h2 className="titulo-producto-carrito">{product.title}</h2>
                            <p className="price">${product.price}</p>
                            <button className="btn-add-cart" onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

