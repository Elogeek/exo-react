import './Product.css';

export const Product = function ({product,setIsProductUpdated}) {

    /**
     * Gère l'action de retirer un product du panier
     */
    function handleMinusClick(e) {
        if(product.cart > 0) {
            product.cart -= 1;
            setIsProductUpdated(true);
        }
    }

    /**
     *  Gère l'action add a product du panier
     */
    function handlePlusClick(e) {
        if(product.cart < product.stock) {
            product.cart += 1;
            setIsProductUpdated(true);
        }
    }

    return (
        <div className="Product" id={product.id}>
            <div className="image">
                <img src={product.picture} alt={product.name} />
            </div>
            <div className="content">
                <p className="price">${product.price}</p>
                <h1>{product['name']}</h1>
                <p className="description">{product.description}</p>
                <div className="flexRow">
                    <div className="QuantitySelector">
                        <button className="quantity-selector-minus" onClick={handleMinusClick}> - </button>
                        <div className="quantity-selector-amount">{product.cart}</div>
                        <button className="quantity-selector-plus" onClick={handlePlusClick}> + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}