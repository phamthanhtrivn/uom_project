export const addToCart = (id, info, quantity = 1) => {
  return {
    type: "ADD_TO_CART",
    id: id,
    info: info,
    quantity: quantity
  }
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id: id
  }
};

export const updateQuantity = (id, quantity = 1) => {
  return {
    type: "UPDATE_QUANTITY",
    id: id,
    quantity: quantity
  }
};

export const updateQuantity2 = (id, quantity = 1) => {
  return {
    type: "UPDATE_QUANTITY_2",
    id: id,
    quantity: quantity
  }
};

export const deleteAll = (id) => {
  return {
    type: "DELETE_ALL",
  }
};