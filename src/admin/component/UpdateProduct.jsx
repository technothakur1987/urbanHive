import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../store/store";
import { Timestamp, updateDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";

const UpdateProduct = () => {
  let navigate = useNavigate();
  let { loading, dispatch, allProducts,allcategories } = useContext(AppContext);
  let { productId } = useParams();
  console.log(allcategories)

  let categoryList = [...allcategories]
  console.log(categoryList)
  let [formdata, setformdata] = useState({
    productTitle: ``,
    productCategory: "",
    productRating: "",
    productFeatured: "",
    productPrice: "",
    productImgUrl: "",
    productDesc: "",
    productQty: "",
    id: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  console.log(formdata);
  useEffect(() => {
    let updatedProduct = allProducts.filter((product) => {
      return product.id === productId.replace(":", "");
    });
    console.log(updatedProduct);

    if (updatedProduct) {
      setformdata(updatedProduct[0]);
    }
  }, [allProducts, productId]);

  let handleOnChange = (e) => {
    console.log(e.target.name);

    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  let updateProduct = async () => {
    console.log(formdata);
    // validation
    if (
      formdata.productTitle === "" ||
      formdata.productPrice === "" ||
      formdata.productRating === "" ||
      formdata.productImgUrl === "" ||
      formdata.productFeatured === "" ||
      formdata.productCategory === "" ||
      formdata.productDesc === "" ||
      formdata.productQty === ""
    ) {
      return toast.error("All Fields are required");
    }
    if (formdata.productRating > 5) {
      return toast.error("Product Rating Should be below 5");
    }

    dispatch({ type: "LOADER-TRUE" });

    try {
      console.log(productId.replace(':',""));
      await updateDoc(doc(fireDB, "products", productId.replace(':',"")), formdata);
      toast.success("Product Updated successfully");
      navigate("/admin-dashboard/adminProducts");
      dispatch({ type: "LOADER-FALSE" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADER-FALSE" });
      toast.error("Update product failed");
    }
  };

  return (
    <div>
      {" "}
      <div className="signup d-flex justify-content-center align-items-center addproduct">
        {loading ? (
          <>
            <Loader />
            <div className="centerSignup  p-5 rounded d-flex justify-content-center align-items-center addProductcenterSignup">
              <form
                action=""
                className="w-100 h-100  "
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h2 className="mb-2 text-uppercase">Update Product </h2>
                <div className="w-100 py-2 ">
                  <label htmlFor="productTitle"></label>
                  <input
                    type="text"
                    id="productTitle"
                    name="productTitle"
                    placeholder="Product Title"
                    className="w-100"
                    value={formdata.productTitle}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-100 py-2 ">
                  <label htmlFor="productPrice"></label>
                  <input
                    type="number"
                    id="productPrice"
                    name="productPrice"
                    placeholder="Product Price"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.productPrice}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="w-100 py-2 ">
                  <label htmlFor="productRating"></label>
                  <input
                    type="number"
                    id="productRating"
                    name="productRating"
                    placeholder="Product Rating / 5"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.productRating}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="w-100 py-2 ">
                  <label htmlFor="productQty"></label>
                  <input
                    type="number"
                    id="productQty"
                    name="productQty"
                    placeholder="Product Quantity"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.productQty}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-100 py-2 ">
                  <label htmlFor="productImgUrl"></label>
                  <input
                    type="text"
                    id="productImgUrl"
                    name="productImgUrl"
                    placeholder="Product Image Url"
                    className="w-100"
                    value={formdata.productImgUrl}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="w-100 py-2 ">
                  <select
                    name="productFeatured"
                    id="productFeatured"
                    className="w-100 categorySelect "
                    value={formdata.productFeatured}
                    onChange={handleOnChange}
                  >
                    <option value="">Featured Product</option>
                    <option className=" comOption" value="yes">
                      Yes
                    </option>
                    <option className=" comOption" value="no">
                      No
                    </option>
                  </select>
                </div>
                <div className="w-100 py-2 ">
                  <select
                    name="productCategory"
                    id="productCategory"
                    className="w-100 categorySelect "
                    value={formdata.productCategory}
                    onChange={handleOnChange}
                  >
                    <option value="">Select a Category </option>

                    {categoryList.map((value, index) => {
                      const { name } = value;
                      return (
                        <option className=" comOption" key={index} value={name}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="w-100 py-2 ">
                  <label htmlFor="productDesc"></label>
                  <textarea
                    type="text"
                    id="productDesc"
                    name="productDesc"
                    placeholder="Product Description"
                    className="w-100 desciptiontextarea"
                    value={formdata.productDesc}
                    onChange={handleOnChange}
                  ></textarea>
                </div>
                <button
                  className="my-3 yellowbtn text-capitalize"
                  onClick={updateProduct}
                >
                  Update Product !
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="centerSignup  p-5 rounded d-flex justify-content-center align-items-center addProductcenterSignup">
            <form
              action=""
              className="w-100 h-100  "
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2 className="mb-2 text-uppercase">Update Product </h2>

              <div className="row">
                <div className=" col-6 py-2 ">
                  <label htmlFor="productTitle"></label>
                  <input
                    type="text"
                    id="productTitle"
                    name="productTitle"
                    placeholder="Product Title"
                    className="w-100"
                    value={formdata.productTitle}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-6 py-2 ">
                  <label htmlFor="productPrice"></label>
                  <input
                    type="number"
                    id="productPrice"
                    name="productPrice"
                    placeholder="Product Price"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.productPrice}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-6 py-2 ">
                  <label htmlFor="productRating"></label>
                  <input
                    type="number"
                    id="productRating"
                    name="productRating"
                    placeholder="Product Rating / 5"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.productRating}
                    onChange={handleOnChange}
                    min={0}
                    max={5}
                  />
                </div>

                <div className="col-6 py-2 ">
                  <label htmlFor="productQty"></label>
                  <input
                    type="number"
                    id="productQty"
                    name="productQty"
                    placeholder="Product Quantity"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.productQty}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-6 py-2 ">
                  <select
                    name="productFeatured"
                    id="productFeatured"
                    className="w-100 categorySelect "
                    value={formdata.productFeatured}
                    onChange={handleOnChange}
                  >
                    <option value="">Featured Product</option>
                    <option className=" comOption" value="yes">
                      Yes
                    </option>
                    <option className=" comOption" value="no">
                      No
                    </option>
                  </select>
                </div>

                <div className="col-6 py-2 ">
                  <select
                    name="productCategory"
                    id="productCategory"
                    className="w-100 categorySelect "
                    value={formdata.productCategory}
                    onChange={handleOnChange}
                  >
                    <option value="">Select a Category </option>

                    {categoryList.map((value, index) => {
                      const { name } = value;
                      return (
                        <option className=" comOption" key={index} value={name}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-12 py-2 ">
                  <label htmlFor="productImgUrl"></label>
                  <input
                    type="text"
                    id="productImgUrl"
                    name="productImgUrl"
                    placeholder="Product Image Url"
                    className="w-100"
                    value={formdata.productImgUrl}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="w-100 py-2 ">
                <label htmlFor="productDesc"></label>
                <textarea
                  type="text"
                  id="productDesc"
                  name="productDesc"
                  placeholder="Product Description"
                  className="w-100 desciptiontextarea"
                  value={formdata.productDesc}
                  onChange={handleOnChange}
                ></textarea>
              </div>
              <button
                className="my-3 yellowbtn text-capitalize"
                onClick={updateProduct}
              >
                Update Product !
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateProduct;
