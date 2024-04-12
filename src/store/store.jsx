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
  allcategories:[]
};



let AppProvider = ({ children }) => {

  
  let [state, dispatch] = useReducer(reducer, initialState);

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
            
            dispatch({ type: "LOADER-FALSE" });
            dispatch({type:'SET-ALL-PRODUCTS', payload:productArray})
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
