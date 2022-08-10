const initialstate = {
 loading: false,
 data: null,
};

export const companyReducer = (state = initialstate, action) => {
 switch (action.type) {
   case "Request_Update_Company":
     return {
       ...state,
       loading: true,
     };
   case "Update_Company_Success":
     return {
       ...state,
       data: action.payload,
     };
   case "Update_Company_Failed":
     return {
       ...state,
       error: action.payload,
     };
   default:
     return state;
 }
};
