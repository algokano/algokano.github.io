import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //console.log('driverAdd request', action.payload);

    try {
        yield put(Routines.driverAdd.request())

        const response = yield call(api.admin.driverAdd, request)
         console.log('driverAdd response',response)

        yield put(
            Routines.driverAdd.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.driverAdd.failure(e))
    } finally {
        yield put(Routines.driverAdd.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.driverAdd.TRIGGER, trigger, api)
}