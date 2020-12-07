import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShopData = (state) => state.shop;

//Selects whole collection object
export const selectCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

//selects single collection object of given Url 
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections[collectionUrlParam]
  )
);

//Selects
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)
