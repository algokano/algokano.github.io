import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //console.log('getDriversList request', action.payload);

    try {
        yield put(Routines.getDriversList.request())

        const response = yield call(api.admin.getDriversList, request)
      //  console.log('getDriversList response',response)

        yield put(
            Routines.getDriversList.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.getDriversList.failure(e))
    } finally {
        yield put(Routines.getDriversList.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.getDriversList.TRIGGER, trigger, api)
}