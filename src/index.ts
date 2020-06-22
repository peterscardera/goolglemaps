import { User } from "./Users"
import { Company } from "./Company"
import { CustomMap } from "./customMap"
//https://www.npmjs.com/package/@types/googlemaps  search @types/googlemaps FOR THE TYPES DEFINITION
// const user = new User()
// console.log(user)
// const company = new Company()
// console.log(company)

const user = new User();
const company = new Company()

const customMap = new CustomMap("maps")


customMap.addMarker(user)
customMap.addMarker(company)