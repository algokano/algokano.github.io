import { Routines } from '../../common/api'
let moment = require('moment');

const initial = {
    data:{},
    rows:[],
    dates:[],
    plan:[],
    processing:false,
    toastActive:false
}

export default (state = initial, action) => {
    switch (action.type){
        case Routines.admin.getDriverInfo.SUCCESS:{
            return {
                ...state,
                data:action.payload.response.data
        }
        }
        case Routines.admin.getRows.SUCCESS:{
            let data = action.payload.response.data
            let d = [], p = [], date = data[0] && data[0].date, s=0
            data.map((item, index)=>{
                if(moment(date).format("DD-MM-YYYY") === moment(item.date).format("DD-MM-YYYY")){
                    date = item.date
                    s = s + item.plan
                }
                else{
                    d.push(moment(date).format("DD-MM"))
                    p.push(s)
                    date=item.date
                    s=item.plan;
                }
                if(!data[index+1]){
                    d.push(moment(date).format("DD-MM")) //oxirgi element uchun
                    p.push(s)
                }
            })
            return {
                ...state,
                rows:data,
                dates:d,
                plan:p,
                processing:false
        }
        }
        case Routines.admin.getRows.FULFILL:
            return {
                ...state,
                processing: false
            }
        case Routines.admin.getRows.REQUEST:
            return {
                ...state,
                processing: true
            }
            case Routines.admin.driverEdit.SUCCESS:{
            return {
                ...state,
                data:action.payload.response.data,
                processing:false,
                toastActive:true
        }
        }
        case Routines.admin.driverEdit.FULFILL:
            return {
                ...state,
                processing: false,
                toastActive:false
            }
        case Routines.admin.driverEdit.REQUEST:
            return {
                ...state,
                processing: true
            }
    }
    return state
}