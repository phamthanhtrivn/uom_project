const cartReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...newState,
        {
          id: action.id,
          info: action.info,
          quantity: action.quantity
        }
      ];
    case "DELETE_ITEM":
      newState = newState.filter(item => item.id !== action.id);
      return newState;
    case "UPDATE_QUANTITY":
      const itemUpdate = newState.find(item => item.id === action.id);
      itemUpdate.quantity = action.quantity;
      return newState;
    case "UPDATE_QUANTITY_2":
      const itemUpdate_2 = newState.find(item => item.id === action.id);
      itemUpdate_2.quantity = itemUpdate_2.quantity + action.quantity;    
      return newState;
    case "DELETE_ALL":
      return [];
    default:
      return state;
  }

}

export default cartReducer;