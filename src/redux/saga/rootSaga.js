import { fork, all } from 'redux-saga/effects';

import SagaDefault from './actions/default';

export default function* rootSaga() {
    yield all([
        fork(SagaDefault),
    ]);
}
