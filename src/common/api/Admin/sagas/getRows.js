import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
   // console.log('getRows request', action.payload);

    try {
        yield put(Routines.getRows.request())

        const response = yield call(api.admin.getRows, request)
        //console.log('getRows response',response)

        yield put(
            Routines.getRows.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.getRows.failure(e))
    } finally {
        yield put(Routines.getRows.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.getRows.TRIGGER, trigger, api)
}