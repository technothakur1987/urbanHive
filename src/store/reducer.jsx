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
  
      default:
        return state;
    }
  };
  
  export { reducer };
  