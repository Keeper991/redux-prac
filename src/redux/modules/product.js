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

export const increaseNextId = () => {
  return {
    type: INCREASE_NEXT_ID,
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
      const newProduct = action.payload;
      const newList = [...state.list];

      newList.push(newProduct);

      return { list: newList, nextId: state.nextId };
    // return [...state.list, action.payload];
    case REMOVE_PRODUCT:
      const filteredList = [...state.list];
      const id = action.payload;
      const index = filteredList.findIndex((item) => item.id === id);

      filteredList.splice(index, 1);

      return { list: filteredList, nextId: state.nextId };
    // return state.list.filter((item) => item.id !== action.payload);
    case INCREASE_NEXT_ID:
      return { list: state.list, nextId: state.nextId + 1 };
    default:
      return state;
  }
};

export default reducer;
