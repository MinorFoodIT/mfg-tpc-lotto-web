
import { LottoCustomer } from '../types/app.type'
import getUrl from '../common/helpers'

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

export async function registerLottoCustomer( lottoCustomer: LottoCustomer) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'client_id': 'minorfoodit'
        },
        body: JSON.stringify(lottoCustomer)
    }
    try {
        const response = await fetch(getUrl('/v1/lotto/webregister'), requestOptions)
        const data = await response.json()
        if (!response.ok) {
            const error = (data && data.message) || response.status
            return Promise.reject(error)
        }
        return data
    } catch (error_1) {
        console.error('There was an error!', error_1)
    }
}