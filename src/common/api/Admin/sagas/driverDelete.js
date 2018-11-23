import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //console.log('driverDelete request', action.payload);

    try {
        yield put(Routines.driverDelete.request())

        const response = yield call(api.admin.driverDelete, request)
        console.log('driverDelete response',response)

        yield put(
            Routines.driverDelete.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.driverDelete.failure(e))
    } finally {
        yield put(Routines.driverDelete.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.driverDelete.TRIGGER, trigger, api)
}