import toast from "react-hot-toast";
let reducer = (state, action) => {
  switch (action.type) {
    case "GET-LOGIN-USER":
      let loginUserr = JSON.parse(localStorage.getItem("user"));
      if (loginUserr === null) {
        console.log("loginUser is null");
        return { ...state, loginUser: null };
      } else {
        console.log("loginUser updated:", loginUserr);
        return { ...state, loginUser: loginUserr };
      }

    case "LOG-OUT":
      localStorage.removeItem('user');
      return {
        ...state,
        loginUser: null,
      };

    case "LOADER-TRUE":
      return {
        ...state,
        loading: true,
      };

    case "LOADER-FALSE":
      return {
        ...state,
        loading: false,
      };

    case "SET-ALL-PRODUCTS":
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      };

    case "SET-ALL-CATEGORY":
      return {
        ...state,
        loading: false,
        allcategories: action.payload,
      };

    case "SET-FEATURED-PRODUCTS":
      return {
        ...state,
        loading: false,
        allFeatured: action.payload,
      };

    case "GET-ALL-USERS":
      return {
        ...state,
        loading: false,
        allUsers: action.payload,
      };

      case "ADD-TO-CART":
        console.log(action.payload);
  
        let cartCopy = [...state.allCart];
        let existingProduct = cartCopy.find(product => product.id === action.payload.id);
  
        if (!existingProduct) {
          let productToBeAdded = {
            id: action.payload.id,
            productTitle: action.payload.productTitle,
            productCategory: action.payload.productCategory,
            productImgUrl: action.payload.productImgUrl,
            productPrice: action.payload.productPrice,
            productQty: '1'
          };
          cartCopy.push(productToBeAdded);
          localStorage.setItem("cart", JSON.stringify(cartCopy));
        } else {
          
        }
        
  
        
  
        return {
          ...state,
          allCart: cartCopy
        };

            
      

    default:
      return state;
  }
};

export { reducer };
