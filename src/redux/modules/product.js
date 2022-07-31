const CREATE_PRODUCT = "product/CREATE_PRODUCT";
const REMOVE_PRODUCT = "product/REMOVE_PRODUCT";
const INCREASE_NEXT_ID = "product/INCREASE_NEXT_ID";

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: productId,
  };
};

const initialState = {
  list: [
    {
      id: 1,
      name: "티셔츠",
      price: 10000,
      type: "top",
    },
  ],
  nextId: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newList = [...state.list];
      newList.push(action.payload);
      return newList;
    // return [...state.list, action.payload];
    case REMOVE_PRODUCT:
      const filteredList = [...state.list];
      const id = action.payload;
      const index = filteredList.findIndex((item) => item.id === id);
      filteredList.splice(index, 1);
      return filteredList;
    // return state.list.filter((item) => item.id !== action.payload);
    case INCREASE_NEXT_ID:
      return state.nextId + 1;
    default:
      return state;
  }
};

export default reducer;
