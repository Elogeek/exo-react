import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export const Cart = function ({products}) {

    function handleClick() {
        console.log('le btn a été cliqué !');
    }

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {products.map(product =>
                <CartItem key={product.id} product={product} quantity={product.quantity}
                />)}
            <button className="btn_refresh_cart" onClick={handleClick}>Vider le panier</button>
        </div>
    );
}