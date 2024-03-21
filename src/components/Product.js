import "./Product.css";
import { Link } from "react-router-dom";
function Product(props) {

  return (
    <>
      <div className="card" style={{ width: " 18rem"}} key={props.product.id}>
        <img src={props.product.image} className="card-img-top img" alt={props.product.title} />
        <div className="card-body">
          <h5 className="card-title">{ props.product.title}</h5>
          <span className="card-text">
            ${props.product.price}
          </span>
          <Link  to={`/details/${props.product.id}`} className="btn btn-primary btnDetail">Details</Link>
        </div>
      </div>
    </>
  );
}
export default Product;
