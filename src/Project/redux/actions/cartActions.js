export const addToCart = (products) => {
    return{
        type: 'ADDTOCART',
        products
    };
};
export const deleteFromCart=(products)=>{
    return{
        type:'DELETFROMCAERT',
        products
    };
};

