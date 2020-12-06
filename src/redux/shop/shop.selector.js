import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopData = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections[collectionUrlParam]
  )
);

export const selectCollectionForPreview = createSelector(
  [selectCollection],
  collections => Object.keys(collections).map(key => collections[key])
)
