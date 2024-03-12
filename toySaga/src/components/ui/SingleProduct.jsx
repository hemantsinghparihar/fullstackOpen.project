import React from "react";
import '../../App.css'

function SingleProduct(props) {
  const products = props.products;
 
  return (
    <div className="row">
      {products.data?.map(prod=>{
      return(
        <div className="col-sm-12 col-md-4"  >
        <div className="prod-Box" >
          <div className="prod-Img-Box">
            {/* <img src={prodThree} alt=""/> */}
            <img
              src={`http://localhost:1337${
                products.data
                  ? prod.attributes.productImage.data[0].attributes
                      .url
                  : "null"
              }`}
              alt=""
            />
          </div>
          <div className="prodContent">
            <h5>
              {products.data
                ? prod.attributes.productTitle
                : "title"}
            </h5>
            <p>
              {products.data ?prod.attributes.productInfo : "info"}
            </p>
            <a href="#">
              {products.data ? prod.attributes.linkText : "info"}
            </a>
            {/* <h5>Image title goes here</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua</p>
                                <a href="#">Read More</a> */}
          </div>
        </div>
       </div>
      )})}
    </div>
  );
}

export default SingleProduct;
