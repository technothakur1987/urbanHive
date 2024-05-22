import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { query ,collection,onSnapshot,QuerySnapshot,orderBy } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";



// Create context
let AppContext = createContext();

// Provider
let initialState = {
  loading: false, 
  loginUser: null,
  allProducts:[],
  allcategories:[],
  allFeatured:[],
  allUsers:[],
  allCart:JSON.parse(localStorage.getItem('cart'))||[]
};



let AppProvider = ({ children }) => {

  
  let [state, dispatch] = useReducer(reducer, initialState);

  const getAllUsersFunction = async () => {
    dispatch({type:'LOADER-TRUE'})
    try {
        const q = query(
            collection(fireDB, "users"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let usersArray = [];
            QuerySnapshot.forEach((doc) => {
              usersArray.push({ ...doc.data(), id: doc.id });
            });

            console.log(usersArray)
            
            
            dispatch({ type: "LOADER-FALSE" });
            dispatch({type:'GET-ALL-USERS',payload:usersArray})
            
        });
        return () => data;
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADER-FALSE" });
    }
}

  const getAllProductFunction = async () => {
    dispatch({type:'LOADER-TRUE'})
    try {
        const q = query(
            collection(fireDB, "products"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let productArray = [];
            QuerySnapshot.forEach((doc) => {
                productArray.push({ ...doc.data(), id: doc.id });
            });

            console.log(productArray)
            let featuredProducts = productArray.filter((item)=>{ return item.productFeatured === 'yes'})
            console.log(featuredProducts)
            
            dispatch({ type: "LOADER-FALSE" });
            dispatch({type:'SET-ALL-PRODUCTS', payload:productArray})
            dispatch({type:'SET-FEATURED-PRODUCTS', payload:featuredProducts})
        });
        return () => data;
    } catch (error) {
        console.log(error);
        dispatch({ type: "LOADER-FALSE" });
    }
}

const getAllCategoryFunction = async () => {
  dispatch({type:'LOADER-TRUE'})
  try {
      const q = query(
          collection(fireDB, "category"),
          orderBy('id')
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
          let cat_Array = [];
          QuerySnapshot.forEach((doc) => {
              cat_Array.push({ ...doc.data(), id: doc.id });
          });

          console.log(cat_Array)
          
          dispatch({ type: "LOADER-FALSE" });
          dispatch({type:'SET-ALL-CATEGORY', payload:cat_Array})
      });
      return () => data;
  } catch (error) {
      console.log(error);
      dispatch({ type: "LOADER-FALSE" });
  }
}

  useEffect(()=>{
    getAllProductFunction()
    getAllCategoryFunction()
    getAllUsersFunction()
    
  },[])

  useEffect(() => {
    console.log("State  in store:", state);
  }, [state]);
  


 

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
