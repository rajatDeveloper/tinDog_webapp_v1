import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    // size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img
        className="imageTest"
        src={product.images[0].url}
        alt={product.name}
      />

      <p>
        {product.name}---{product.gender}
      </p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews}Feedback)
        </span>
      </div>
      <span>Age : {product.price}</span>
    </Link>
  );
};

export default ProductCard;
