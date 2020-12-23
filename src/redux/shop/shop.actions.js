import SHOP_ACTIONS_TYPES from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (error) => ({
  type: SHOP_ACTIONS_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
