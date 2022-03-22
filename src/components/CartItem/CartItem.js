import './CartItem.css';
import trash from '../../assets/images/trash.svg';

export const CartItem = function (props) {
    const altTrash = "Amazing trash !";

    return (
        <div className="CartItem" id={props.id}>
            <div className="center">
                <img src={trash} className="trash" alt={altTrash}/>
            </div>
            <div className="container_product">
                <div className="flexRow">
                    <p className="CartItem_name">{props.name}</p>
                    <span className="CartItem_quantity">({props.quantity})</span>
                </div>
                <div className="lineHorizontal"/>
            </div>
        </div>
    );
}