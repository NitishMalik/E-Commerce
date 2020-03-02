import SHOP_DATA from "./shopdata";
import { ShopActionTypes } from "./shopActionTypes";

const INITIAL_STATE = {
  collections: SHOP_DATA,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
