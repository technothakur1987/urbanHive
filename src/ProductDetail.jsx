import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { productId } = useParams();
  console.log(productId);

  const [product, setProduct] = useState(null);

  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  useEffect(() => {
    const productData = [
      {
        id: 1,
        image:
          "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 150,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 2,
        image:
          "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
        title: "Kaushalam kalash Copper Pot",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 3,
        image:
          "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 130,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 4,
        image:
          "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 5,
        image:
          "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 150,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 6,
        image:
          "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
        title: "Kaushalam kalash Copper Pot",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 7,
        image:
          "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 130,
        trendingProductName: "Featured",
        quantity: 1,
      },
      {
        id: 8,
        image:
          "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
        title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
        desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
        price: 120,
        trendingProductName: "Featured",
        quantity: 1,
      },
    ];

    let product = productData.filter((product) => productId == product.id);

    setProduct(product[0]);
  }, [productId]);

  return (
    <>
      <Header />
      {product && (
        <div className="productDetail px-3 d-flex align-items-center justify-content-center ">
          <div className="row h-100 w-100 py-5">
            <div className="col-sm-6 d-flex justify-content-center align-items-center">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6 d-flex flex-column align-items-start justify-content-around ">
              <h2 className="mb-0">{product.title}</h2>
              <div className="d-flex align-items-center justify-content-start star">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className="price fs-3">
                <span className="rs" style={{ fontWeight: "900" }}>
                  ₹{" "}
                </span>
                <span
                  className=" "
                  style={{ textDecoration: "line-through" }}
                >{`  ${(product.price * 1.1).toFixed(2)}  `}</span>
                {product.price} /-
              </p>

              <p className="desc mb-0 text-secondary">{product.desc}</p>
              <button className="btn btn-lg bluebtn w-100 ">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
