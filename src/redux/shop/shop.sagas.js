import { takeLatest, put, call, all} from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {fetchCollectionsSuccess, fetchCollectionFailure} from "./shop.actions"
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"


export function* fetchCollectionsAsync() {
  try{
    const collectionRef =  firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap))
  }catch(error){
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas(){
  yield all([call(fetchCollectionsStart)])
}