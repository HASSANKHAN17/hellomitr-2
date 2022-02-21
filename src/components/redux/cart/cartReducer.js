const initialStateCart = []

const cartReducer = (state = initialStateCart,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            console.log(state)
            let itemArr = state.filter(item=>item.id === action.payload.id)
            console.log(itemArr)
            if(itemArr.length===0){
                return [...state,action.payload]
            }else{
                return state;
            }
        case 'REMOVE_ITEM':
            return state.filter(item=>item.id!==action.payload.id) 
        default:
            return state;
    }
}

export default cartReducer;