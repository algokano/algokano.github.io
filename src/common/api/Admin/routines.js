import { createRoutine } from 'redux-saga-routines'

export default {

    getCarsList: createRoutine('GET_CARS_LIST'),
    getDriversList: createRoutine('GET_DRIVERS_LIST'),
    getDriverInfo: createRoutine('GET_DRIVER_INFO'),
    getRows: createRoutine('GET_DRIVER_ROWS'),
    driverAdd: createRoutine('GET_DRIVER_ADD'),
    driverDelete: createRoutine('DRIVER_DELETE'),
    driverEdit: createRoutine('DRIVER_EDIT')
}