import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //console.log('getDriverInfo request', action.payload);

    try {
        yield put(Routines.getDriverInfo.request())

        const response = yield call(api.admin.getDriverInfo, request)
      //  console.log('getDriverInfo response',response)

        yield put(
            Routines.getDriverInfo.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.getDriverInfo.failure(e))
    } finally {
        yield put(Routines.getDriverInfo.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.getDriverInfo.TRIGGER, trigger, api)
}