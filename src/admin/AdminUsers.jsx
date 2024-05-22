import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../store/store";
import Loader from "../components/Loader";
import { deleteDoc,doc } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const AdminUsers = () => {
  let navigate = useNavigate();
  let {allProducts,  loading, dispatch ,allUsers} = useContext(AppContext);
  console.log(allUsers);

  let deleteUser = async (id)=>{
    console.log("delete this user with "+ id );
    dispatch({type:'LOADER-TRUE'})
    try {
      await deleteDoc(doc(fireDB, 'users', id))
      toast.success('User Deleted successfully')
      //getAllProductFunction();
      dispatch({type:'LOADER-FALSE'})
  } catch (error) {
      console.log(error)
      dispatch({type:'LOADER-FALSE'})
  }

  }

  let userfunc = (e)=>{
    // console.log(e)
    // console.log(e.target.dataset.id)
    // console.log(e.target.classList[1])
    if(e.target.classList[1] === 'fa-trash'){
      deleteUser(e.target.dataset.id)
    }else if(e.target.classList[1] === 'fa-pen'){

      console.log('update this product')
      navigate(`/updateUser/:${e.target.dataset.id}`)

    }

  }
  return (
    <div className="adminProductsSection pt-3">
      <div className="topPr d-flex align-items-center justify-content-between">
        <h2>All Users Here ...</h2>
        <Link to="/addUser" className="btn btn-sm adminyellowbtn ">
        <i className="fa-solid fa-user fs-2" aria-hidden="true"></i> 
        </Link>
      </div>
      <div className="bottomPr table-responsive pt-3">
        <table className="table producttable text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col " className="text-uppercase mqw-100">Full Name</th>
              <th scope="col" className="text-uppercase desciptonProduct">Details</th>
              
              <th scope="col" className="text-uppercase desciptonProduct">Role</th>
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
                allUsers.length === 0 ?
                (
                  <tr>
                
                <td colSpan={4}>
                  <div className=" d-flex justify-content-center align-items-center w-100 ">
                   <h2 className="text-center">Plz Add Some Users...</h2>
                  </div>
                </td>
              </tr>
                )
                :''
              }
              {
                allUsers.map((user, index)=>{
                  let {fullname,email,password,role,date,id } = user
                  
                  console.log(user)
                
                  return (<tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td className="mqw-100">
                      <div className="d-flex align-items-start justify-content-around">
                        <div className="prDetails text-start">
                          <p className="title text-dark text-uppercase">{fullname}</p>
                          
                        </div>

                      </div>
                    </td>
                    <td className="text-center desciptonProduct " >{email}<span className="fs-5 fw-bolder d-block"> ( {password})</span></td>
                    
                    <td className="text-center desciptonProduct " >{role}</td>
                    
                    
                    <td>
                      <div className="d-flex align-items-center justify-content-center"  onClick={(e)=>{userfunc(e)}}>
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
}

export default AdminUsers