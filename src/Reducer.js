export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

// console.log(initialState.basket);\

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // console.log(state.basket);
      return {
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const ItemIndex = state.basket.findIndex((ele) => ele.id === action.id);
      console.log("cxccxc" + ItemIndex);
      console.log(ItemIndex);
      // let newBasket = [...state.basket];
      if (ItemIndex >= 0) {
        var newBasket = [...state.basket];
        newBasket.splice(ItemIndex, 1);
        console.log(state);
      }

      return {
        // basket: [state.basket, deleted],
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
