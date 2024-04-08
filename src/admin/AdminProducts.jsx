import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/store";
import Loader from "../components/Loader";
import { deleteDoc,doc } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";



const AdminProducts = () => {
  let { allProducts, loading, dispatch } = useContext(AppContext);
  console.log(allProducts);

  let deleteProduct = async (id)=>{
    console.log("delete this product with "+ id );
    dispatch({type:'LOADER-TRUE'})
    try {
      await deleteDoc(doc(fireDB, 'products', id))
      toast.success('Product Deleted successfully')
      //getAllProductFunction();
      dispatch({type:'LOADER-FALSE'})
  } catch (error) {
      console.log(error)
      dispatch({type:'LOADER-FALSE'})
  }

  }

  let productfunc = (e)=>{
    // console.log(e)
    // console.log(e.target.dataset.id)
    // console.log(e.target.classList[1])
    if(e.target.classList[1] === 'fa-trash'){
      deleteProduct(e.target.dataset.id)
    }else if(e.target.classList[1] === 'fa-pen'){

      console.log('update this product')

    }

  }
  return (
    <div className="adminProductsSection pt-3">
      <div className="topPr d-flex align-items-center justify-content-between">
        <h2>All Products Here ...</h2>
        <Link to="/addProduct" className="btn btn-sm adminyellowbtn ">
        <i className="fa fa-product-hunt fs-2" aria-hidden="true"></i> 
        </Link>
      </div>
      <div className="bottomPr table-responsive pt-3">
        <table className="table producttable text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col " className="text-uppercase mqw-100">Product</th>
              <th scope="col" className="text-uppercase desciptonProduct">Description</th>
              <th scope="col" className="text-uppercase">Action</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                
                <td colSpan={4}>
                  <div className=" d-flex justify-content-center align-items-center w-100 ">
                    <div className="spinner-border " role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="bg-success w-100">
              {
                allProducts.length === 0 ?
                (
                  <tr>
                
                <td colSpan={4}>
                  <div className=" d-flex justify-content-center align-items-center w-100 ">
                   <h2 className="text-center">Plz Add Some Products...</h2>
                  </div>
                </td>
              </tr>
                )
                :''
              }
              {
                allProducts.map((product, index)=>{
                  let {productTitle,productImgUrl,date,id,productCategory,productDesc,productFeatured,productPrice,productQty,productRating} = product
                
                  return (<tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td className="mqw-100">
                      <div className="d-flex align-items-start justify-content-around">
                        <img src={productImgUrl} alt={productTitle} className="img-thumbnail"/>
                        <div className="prDetails text-start">
                          <p className="title text-dark text-uppercase">{productTitle}</p>
                          <p className="price text-dark">Rs {productPrice} /-</p>
                          <p className="category text-dark">{productCategory}</p>
                          <p className="Qty text-dark fs-5">{productQty} <span className="fs-6 fw-lighter">in stocks</span></p>
                          <p className="rating text-dark">{productRating} / 5</p>
                          <p className="featured text-dark">{productFeatured ? 'Featured': "Not Featured"}</p>
                          <p className="id text-dark">{id}</p>
                        </div>

                      </div>
                    </td>
                    <td className="text-start desciptonProduct" >{productDesc}<span className="fs-5 fw-bolder"> ( {date})</span></td>
                    
                    
                    <td>
                      <div className="d-flex align-items-center justify-content-center"  onClick={(e)=>{productfunc(e)}}>
                        <button className="btn btn-sm btn-danger me-2">
                          <i className="fa-solid fa-trash" data-id={`${id}`}></i>
                        </button>
                        <button className="btn btn-sm btn-primary ms-2">
                          <i className="fa-solid fa-pen" data-id={`${id}`}></i>
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
