/* eslint-disable require-yield,no-console */
import { put, call, takeLatest } from 'redux-saga/effects';

function* progressE(action) {
    const { pageKey, webId, wsStart, profile } = action.payload;
    //if (pageKey !== false && webId !== false && !isEmpty(profile) && wsStart === false) yield put({ type: 'wsStart', payload: true });
}

function* SagaFirst() {
    yield takeLatest('SAGA_FIRST', progressE);
}

export default SagaFirst;
