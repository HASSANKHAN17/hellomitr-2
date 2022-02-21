export const addToCart = (item)=>{
return {
    type:'ADD_ITEM',
    payload:item
}
}

export const removeFromCart = (item)=>{
return {
    type:'REMOVE_ITEM',
    payload:item
}
}