import {ProductList} from "../ProductList/ProductList";
import './App.css';
import {Header} from "../Header/Header";
import {Category} from "../Category/Category";
import {Cart} from "../Cart/Cart";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import {useState} from "react";

function App() {

    const productsList = [
        {id:1, cart:0, name:'Product 1', picture: image1, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: "$230", stock: 20},
        {id:2, cart:0, name:'Product 2', picture: image2, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: "$230", stock: 10},
        {id:3, cart:0, name:'Product 3', picture: image3, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: "$230", stock: 50},
        {id:4, cart:0, name:'Product 4', picture: image4, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: "$230", stock: 0},
        {id:5, cart:0, name:'Product 5', picture: image5, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit.', price: "$230", stock: 0},
    ]

    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);

    if(isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

    return (
      <>
        <Header/>
          <div className="container">
              <Cart products={products}  setIsProductUpdated={setIsProductUpdated}/>
              <div className="container_product">
                  <Category />
                  <ProductList products={products} setIsProductUpdated={setIsProductUpdated}/>
              </div>
          </div>
      </>
    );
}

export default App;
