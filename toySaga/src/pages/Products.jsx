import React, { useEffect, useState } from "react";
import "../App.css";
// import productService from "../services/productService";
import productService from "../services/productService"
import Product from "../components/ui/SingleProduct";

function Products() {
  const [products, setProducts] = useState({});
  console.log("✌️products --->", products);

  console.log("✌️products.data --->", products.data);

  useEffect(() => {
    const element = document.getElementById("header");
    element.scrollIntoView(true);
    document.title = "ToySaga || Products";
  }, []);
  useEffect(() => {
    productService.getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <main className="Products-page">
        <section className="BreadCrumssec">
          <div className="container">
            <div className="bredContent">
              <h1>All Products</h1>
            </div>
          </div>
        </section>

        <section className="Card-content same-space mb-5">
          <div className="container">
            <div className="CardWrapper">
              <div className="row">
                <div className="col-sm-12 col-md-8">
                  <form action="#">
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <select name="all-categories" id="all-categories">
                          <option value="one">All Categories</option>
                          <option value="two">categories two</option>
                          <option value="three">categories three</option>
                        </select>
                      </div>
                      <div className="col-sm-12 col-md-3">
                        <select name="all-categories" id="all-categories">
                          <option value="one">Age</option>
                          <option value="two">categories two</option>
                          <option value="three">categories three</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-12 col-md-4 rtlBtn">
                  <button className="fillBtn radiusBtn">
                    <span className="BtnIcon">
                      <i className="fa-light fa-file-lines"></i>
                    </span>{" "}
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Product-Sec same-space pb-5">
          <div className="container">

            <Product products={products} />
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;
