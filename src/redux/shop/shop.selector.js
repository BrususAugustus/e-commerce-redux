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
  createSelector([selectCollections], (collections) => collections ?
    collections[collectionUrlParam]
    : null
  )
);

//Selects collections for preview
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => collections ? ( Object.keys(collections).map(key => collections[key]) ) : []
);

export const selectCollectionFetching = createSelector(
  [selectShopData],
  shop => shop.isFetching
)

export const isCollectionsLoaded = createSelector(
  [selectShopData],
  shop => !!shop.collections
)