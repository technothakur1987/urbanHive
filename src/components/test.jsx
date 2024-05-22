import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../store/store";
import { Timestamp, updateDoc, doc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";

const UpdateUser = () => {
    let navigate = useNavigate();
  let { loading, dispatch, allUsers } = useContext(AppContext);
  let { userId } = useParams();
  let [formdata, setformdata] = useState({
    userTitle: "",
    userEmail: "",
    userPassword: "",
    userRole: "",
    id: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  
  useEffect(()=>{
    let updatedUser = allUsers.filter((user) => {
          return user.id === userId.replace(":", "");
        });
        console.log(updatedUser[0]);
        if (updatedUser) {
           //setformdata(updatedUser[0]);
           setformdata({ ...formdata, userTitle: updatedUser[0].fullname })
           }
           console.log(formdata)

  },[allUsers, userId])

  
  

  let handleOnChange = (e) => {
    console.log(e.target.name);

    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value, id: userId });
  };
  let updateUser = ()=>{
    console.log('updating the user')
  }
  // let updateProduct = async () => {
  //   console.log(formdata);
  //   // validation
  //   if (
  //     formdata.productTitle === "" ||
  //     formdata.productPrice === "" ||
  //     formdata.productRating === "" ||
  //     formdata.productImgUrl === "" ||
  //     formdata.productFeatured === "" ||
  //     formdata.productCategory === "" ||
  //     formdata.productDesc === "" ||
  //     formdata.productQty === ""
  //   ) {
  //     return toast.error("All Fields are required");
  //   }
  //   if (formdata.productRating > 5) {
  //     return toast.error("Product Rating Should be below 5");
  //   }

  //   dispatch({ type: "LOADER-TRUE" });

  //   try {
  //     console.log(productId.replace(':',""));
  //     await updateDoc(doc(fireDB, "products", productId.replace(':',"")), formdata);
  //     toast.success("Product Updated successfully");
  //     navigate("/admin-dashboard/adminProducts");
  //     dispatch({ type: "LOADER-FALSE" });
  //   } catch (error) {
  //     console.log(error);
  //     dispatch({ type: "LOADER-FALSE" });
  //     toast.error("Update product failed");
  //   }
  // };
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
                <h2 className="mb-2 text-uppercase">Update User </h2>

                <div className="row">
                  <div className=" col-12 py-2 ">
                    <label htmlFor="userTitle"></label>
                    <input
                      type="text"
                      id="userTitle"
                      name="userTitle"
                      placeholder="User Title"
                      className="w-100"
                      value={formdata.userTitle}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="col-12 py-2 ">
                    <label htmlFor="userEmail"></label>
                    <input
                      type="email"
                      id="userEmail"
                      name="userEmail"
                      placeholder="User Email"
                      className="w-100"
                      autoComplete="off"
                      value={formdata.userEmail}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="col-12 py-2 ">
                    <label htmlFor="userPassword"></label>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword"
                      placeholder="Password"
                      className="w-100"
                      autoComplete="off"
                      value={formdata.userPassword}
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="col-12 py-2 ">
                    <select
                      name="userRole"
                      id="userRole"
                      className="w-100 categorySelect "
                      value={formdata.userRole}
                      onChange={handleOnChange}
                    >
                      <option value="">User Role</option>
                      <option className=" comOption" value="admin">
                        Admin
                      </option>
                      <option className=" comOption" value="user">
                        User
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  className="my-3 yellowbtn text-capitalize"
                  onClick={updateUser}
                >
                  Update User !
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
              <h2 className="mb-2 text-uppercase">Update User </h2>

              <div className="row">
                <div className=" col-12 py-2 ">
                  <label htmlFor="userTitle"></label>
                  <input
                    type="text"
                    id="userTitle"
                    name="userTitle"
                    placeholder="User Title"
                    className="w-100"
                    value={formdata.userTitle}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12 py-2 ">
                  <label htmlFor="userEmail"></label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    placeholder="User Email"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.userEmail}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12 py-2 ">
                  <label htmlFor="userPassword"></label>
                  <input
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    placeholder="Password"
                    className="w-100"
                    autoComplete="off"
                    value={formdata.userPassword}
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12 py-2 ">
                  <select
                    name="userRole"
                    id="userRole"
                    className="w-100 categorySelect "
                    value={formdata.userRole}
                    onChange={handleOnChange}
                  >
                    <option value="">User Role</option>
                    <option className=" comOption" value="admin">
                      Admin
                    </option>
                    <option className=" comOption" value="user">
                      User
                    </option>
                  </select>
                </div>
              </div>

              <button
                className="my-3 yellowbtn text-capitalize"
                onClick={updateUser}
              >
                Update User !
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateUser