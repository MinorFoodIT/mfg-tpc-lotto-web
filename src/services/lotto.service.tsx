
import { LottoCustomer } from '../types/app.type'
import getUrl from '../common/helpers'
import https from 'https';
import axios from 'axios';
// export const Auth = {
//     isAuthenticated: false,
//     //isAuthenticated: true,
//     login(callback: () => void) {
//         this.isAuthenticated = true
//         callback()
//     },
//     logout(callback: () => void) : void {
//         this.isAuthenticated = false
//         callback()
//     }  
// }

// At instance level
// const instance = axios.create({
//     httpsAgent: new https.Agent({  
//       rejectUnauthorized: false
//     })
//   });
  
const axiosRequest = async(lottoCustomer: LottoCustomer):Promise<any> => {
    return new Promise((resolve,reject) => {
        const agent = new https.Agent({  
            rejectUnauthorized: false
           });
        
        const headers = { 
            'Content-Type': 'application/json',
            'client_id': 'minorfoodit'
        }
    
        axios.post(getUrl('/v1/lotto/webregister'), lottoCustomer, { httpsAgent: agent,timeout: 25000 ,headers: headers} )
        .then(response => {
            const data = response.data
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        })
    })
}


export async function registerLottoCustomer( lottoCustomer: LottoCustomer) {
    try {
        let results = await axiosRequest(lottoCustomer)
        return Promise.resolve(results)
    } catch (error_1) {
        console.error('There was an error!', error_1)
        alert(error_1)
        return Promise.reject(error_1)
    }

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 
    //         'Content-Type': 'application/json',
    //         'client_id': 'minorfoodit'
    //     },
    //     body: JSON.stringify(lottoCustomer)
    // }
    // try {
    //     alert(getUrl('/v1/lotto/webregister'))
    //     const response = await fetch(getUrl('/v1/lotto/webregister'), requestOptions)
    //     const data = await response.json()
    //     alert(data)
    //     // if (!response.ok) {
    //     //     const error = (data && data.message) || response.status
    //     //     return Promise.resolve(error)
    //     // }
    //     return data
    // } catch (error_1) {
    //     console.error('There was an error!', error_1)
    //     alert(error_1)
    //     return Promise.reject(error_1)
    // }
}