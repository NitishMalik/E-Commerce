import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};
export const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCategory = categoryUrlParam =>
  createSelector([selectShopCollection], collections =>
    collections.find(c => c.id === COLLECTION_ID_MAP[categoryUrlParam])
  );
