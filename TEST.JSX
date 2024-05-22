import React, { useContext, useState, useEffect } from "react";
import "./AllProducts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./store/store";
import Loader from "./components/Loader";
import toast from "react-hot-toast";

const AllProducts = () => {
  let navigate = useNavigate();
  let { loading, allProducts, dispatch, loginUser } = useContext(AppContext);
  const [allproducts, setallProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setallProducts(allProducts);
  }, []);
  return (
    <>
      <div className="px-3 AllProducts ">
        <h2 className="mt-3">Our Products</h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {allproducts.map((product) => {
              return (
                <div
                  className="col text-decoration-none Liink"
                  key={product.id}
                  onClick={() => {
                    navigate(`/productDetail/${product.id}`);
                  }}
                >
                  <div className="card h-100">
                    <img
                      src={product.productImgUrl}
                      className="card-img-top"
                      alt={product.productTitle}
                      style={{ maxHeight: "25vh" }}
                    />
                    <div className="card-body">
                      <p className="logoname text-secondary">URBAN-HIVE</p>
                      <h5 className="card-title text-uppercase">
                        {product.productTitle.substring(0, 20)}
                      </h5>
                      <p className="card-text  fs-3">
                        <span className="" style={{ fontWeight: "900" }}>
                          ₹{" "}
                        </span>
                        {product.productPrice} /-
                      </p>
                      <button
                        className="btn btn-sm w-100 bluebtn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (loginUser === null) {
                            toast.error(
                              "Plz Register/Login to Add the Product to cart"
                            );
                          } else {
                            dispatch({ type: "ADD-TO-CART", payload: product });
                          }
                        }}
                      >
                        {" "}
                        Add To Cart{" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
