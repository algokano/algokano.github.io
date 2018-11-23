import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //console.log('driverEdit request', action.payload);

    try {
        yield put(Routines.driverEdit.request())

        const response = yield call(api.admin.driverEdit, request)
        //console.log('driverEdit response',response)

        yield put(
            Routines.driverEdit.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.driverEdit.failure(e))
    } finally {
        yield put(Routines.driverEdit.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.driverEdit.TRIGGER, trigger, api)
}