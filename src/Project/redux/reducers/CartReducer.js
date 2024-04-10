var cart =[];
export const CartReducer = (state=cart , action) => {
    switch(action.type){
        case "ADDTOCART":
       
            if(action.products.qty >= 1) {
            action.products.amount++

            if (action.products.amount > 1) {
                return state
            }
            return [...state, action.products];
        }
        else{
            return [...state]
        
            } 
           case "DELETFROMCAERT":
            action.products.amount--
            if(action.products.amount >= 1){
                return state
               } 
            return state.filter((item) => item != action.products);
            default:return state;
        }
    
   
};
