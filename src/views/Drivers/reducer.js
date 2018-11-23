import { Routines } from '../../common/api'

const initial = {
    driversList:[]
}

export default (state = initial, action) => {
    switch (action.type){
        case Routines.admin.getDriversList.SUCCESS:{
            return {
                ...state,
                driversList:action.payload.response.data
        }
        }
    }
    return state
}