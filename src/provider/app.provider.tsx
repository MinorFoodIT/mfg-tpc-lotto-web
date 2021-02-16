import React from 'react'
import { AuthenticationAction, State } from '../types/app.type'

export const initialState: State = {
    // user: {
    //     username: '',
    //     password: '',
    //     role: '',
    //     sitegroup: ''
    // },
    // data: {
    //     grabOrderId: ''
    // },
    isLoading: false,
    isLoggedIn: false,
    //isLoggedIn: true,
    error: '',
    collapsed: true,
    visible: false
}

export const StateContext = React.createContext<State>(initialState)
export const DispatchContext = React.createContext<any>(null)

const StateProvider = StateContext.Provider
const DispatchProvider = DispatchContext.Provider

export const AppProvider = (component: {dispatch: React.Dispatch<AuthenticationAction>, state: State, children: any}) => (
    <DispatchProvider value={component.dispatch}>
        <StateProvider value={component.state}>
            {component.children}
        </StateProvider>
    </DispatchProvider>
)