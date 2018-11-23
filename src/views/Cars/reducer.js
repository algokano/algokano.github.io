import { Routines } from '../../common/api'

const initial = {
    carsList:[]
}

export default (state = initial, action) => {
    switch (action.type){
        case Routines.admin.getCarsList.SUCCESS:{
            return {
                ...state,
                carsList:action.payload.response.data
        }
        }
    }
    return state
}