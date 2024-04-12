let reducer = (state, action) => {
    switch (action.type) {
      case 'GET-LOGIN-USER':
        let loginUserr = JSON.parse(localStorage.getItem('user'));
        if (loginUserr === null ) {
          console.log('loginUser is null');
          return { ...state, loginUser: null };
        } else {
          console.log('loginUser updated:', loginUserr);
          return { ...state, loginUser: loginUserr };
        }
  
      case 'LOG-OUT':
        localStorage.clear();
        return {
          ...state,
          loginUser: null
        };

        case 'LOADER-TRUE':
        return {
          ...state,
          loading: true
        };

        case 'LOADER-FALSE':
        return {
          ...state,
          loading: false
        };

        

      case 'SET-ALL-PRODUCTS':
        return {
          ...state,
          loading: false,
          allProducts:action.payload
        };


        case 'SET-ALL-CATEGORY':
          return {
            ...state,
            loading: false,
            allcategories:action.payload
          };

         
  
      default:
        return state;
    }
  };
  
  export { reducer };
  