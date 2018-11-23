import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //console.log('getCarsList request', action.payload);

    try {
        yield put(Routines.getCarsList.request())

        const response = yield call(api.admin.getCarsList, request)
        //console.log('getCarsList response',response)

        yield put(
            Routines.getCarsList.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.getCarsList.failure(e))
    } finally {
        yield put(Routines.getCarsList.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.getCarsList.TRIGGER, trigger, api)
}