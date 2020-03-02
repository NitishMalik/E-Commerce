import { ShopActionTypes } from "./shopActionTypes";
import SHOP_DATA from "./shopdata";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionMap => ({
  type: ShopActionType.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionAsync = () => {
  return dispatch => {
    try {
      dispatch(fetchCollectionStart());
      const data = SHOP_DATA;
      dispatch(fetchCollectionSuccess(data));
    } catch (error) {
      dispatch(fetchCollectionFailure(error.message));
    }
  };
};
