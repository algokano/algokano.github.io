import { combineReducers } from 'redux';
import test from './test'
import Cars from '../../views/Cars/reducer'
import Drivers from '../../views/Drivers/reducer'
import DriverInfo from '../../views/Driver/reducer'
import DriverAdd from '../../views/DriverAdd/reducer'
import {reducer} from 'redux-form'

export default combineReducers({
    test,
    Cars,
    Drivers,
    DriverInfo,
    DriverAdd,
    form:reducer
})