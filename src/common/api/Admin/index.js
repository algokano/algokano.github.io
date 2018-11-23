export default (api) => {
    return {
        getCarsList: () => {
            return api.get(`cars`)
        },
        getDriversList: () => {
            return api.get(`drivers?filter[order]=active%20DESC`)
        },
        getDriverInfo: (data) => {
            return api.get(`drivers/${data.id}`)
        },
        getRows: (data) => {
            //console.log(data)
            return api.get(`rows?filter[where][and][0][date][gt]=${data.startDate}&filter[where][date][lt]=${data.endDate}&filter[order]=date%20ASC&filter[where][driver_id]=${data.id}`)
        },
        driverAdd: (data) => {
            //console.log(data.data)
            return api.post(`drivers`, data.data)
        },
        driverDelete: (data) => {
            return api.delete(`drivers/${data.id}`)
        },
        driverEdit: (data) => {
            return api.put(`drivers/${data.id}`, data.data)
        }
    }
}
