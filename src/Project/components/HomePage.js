
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { useState } from "react";
import { addSum } from "../redux/actions/ProductsAction";
import Example from "../DetailsModal";
import logo from "../img/7.png"; 
import { Carousel } from "react-bootstrap";
import ProductReducer from "../redux/reducers/productsReducer";

export default function HomePage() {


    
    const products = useSelector((state) => state.productReducer);
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);



    const chunkedProducts = [];
    for (let i = 0; i < products.length; i += 1) {
        chunkedProducts.push(products.slice(i, i + 4));
    }



        
        

    return (
        <div className="container-fluid" style={{ backgroundColor: "white"}}>
            <div className="row justify-content-center align-items-center text-light p-3 ">
                <h1 className="text-center" style={{ color: "black" }}>Discover our Hot products</h1>
            </div>

            <Carousel>
                {chunkedProducts.map((productGroup, index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            {productGroup.map((product) => (
                                <div className="col-md-3" key={product.code}>
                                    <img
                                        className="d-block w-100"
                                        src={product.img}
                                        // alt={product.description}
                                    />
                                    <Carousel.Caption>
                                        {/* <h3>{product.description}</h3>
                                        <p>Price: ${product.price}</p> */}
                                    </Carousel.Caption>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}