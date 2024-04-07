import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/store";
import Loader from "../components/Loader";

const AdminProducts = () => {
  let { allProducts, loading, dispatch } = useContext(AppContext);
  console.log(allProducts);
  return (
    <div className="adminProductsSection pt-3">
      <div className="topPr d-flex align-items-center justify-content-between">
        <h2>All Products Here ...</h2>
        <Link to="/addProduct" className="btn btn-sm adminyellowbtn w-25">
          Add a Product
        </Link>
      </div>
      <div className="bottomPr table-responsive pt-3">
        <table className="table producttable text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Product Id</th>
              <th scope="col">Price</th>
              <th scope="col">Featured</th>
              <th scope="col">Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">Rating</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <th scope="row"></th>
                <td colSpan={11}>
                  <div className=" d-flex justify-content-center align-items-center w-100">
                    <div className="spinner-border " role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>

              {
                allProducts.map((product, index)=>{
                
                  return (<tr key={index}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-around">
                        <button className="btn btn-sm btn-danger">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className="btn btn-sm btn-primary">
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                    </td>
                  </tr>)

                })
              }
              
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
