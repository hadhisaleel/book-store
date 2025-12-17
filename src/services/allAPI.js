// register api : callled by auth component when register btn clicked

import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

export const registerAPI = async (userDetails) => {
   return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

export const loginAPI = async (userDetails) => {
   return await commonAPI("POST",`${serverURL}/login`,userDetails)
}
