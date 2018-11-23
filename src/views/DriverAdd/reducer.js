import { Routines } from '../../common/api'

const initial = {
    is_Active:false,
    toastActive:false
}

export default (state = initial, action) => {
    switch (action.type){
        case Routines.admin.driverAdd.SUCCESS:{
            return {
                ...state,
                is_Active:false,
                toastActive:true
        }
        }
        case Routines.admin.driverAdd.FULFILL:
            return {
                ...state,
                is_Active: false,
                toastActive:false
            }
        case Routines.admin.driverAdd.REQUEST:
            return {
                ...state,
                is_Active: true
            }
    }
    return state
}