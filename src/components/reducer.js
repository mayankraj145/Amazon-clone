export const initialState = {
    basket : [],
    user:null,
};

//Selector

export const getBasketTotal = (basket) => basket?.reduce((amount,item) => amount + item.price , 0)

const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket , action.item],
            };

            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id)
                
                let newBasket = [...state.basket];

                if(index >= 0) {
                    //Eliminates the product with the same index to the product you wanted to remove from the basket
                    newBasket.splice(index, 1); 
                }
                else {
                    console.warn ("Can't remove product")
                }

                return {
                    ...state,
                    basket : newBasket 
                    /*  basket : state.basket.filter(item=> item.id !== action.id)
                    
                    ::: Above line removes the item but it's using the product ID , 
                     so it removes every product that has the same ID , i.e , not one product 
                     but every product that has that ID will be removed. */
                }

                case 'SET_USER' :
                    return {
                        ...state,
                        user : action.user
                    }


            default:
                return state;
    }
}

export default reducer;