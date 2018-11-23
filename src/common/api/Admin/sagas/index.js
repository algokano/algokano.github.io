import getCarsList from './getCarsList'
import getDriversList from "./getDriversList";
import getDriverInfo from "./getDriverInfo"
import getRows from "./getRows";
import driverAdd from "./driverAdd";
import driverDelete from "./driverDelete";
import driverEdit from "./driverEdit";

export default function sagas (api) {
    return [
        getCarsList(api),
        getDriversList(api),
        getDriverInfo(api),
        getRows(api),
        driverAdd(api),
        driverDelete(api),
        driverEdit(api)
    ]
}
