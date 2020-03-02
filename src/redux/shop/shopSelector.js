import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCategoryForPreview = createSelector(
  [selectShopCollection],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCategory = categoryUrlParam =>
  createSelector([selectShopCollection], collections =>
    collections ? collections[categoryUrlParam] : null
  );

export const selectShopIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectShopIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
