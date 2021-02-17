import { AuthenticationAction, State } from '../types/app.type'

export default function reducer(draftState: State, action: AuthenticationAction): State {
    switch (action.type) {
        case 'showHead':
            draftState.displayHead = action.showComponent
            return draftState
        case 'field':
            return draftState
        case 'login':
            draftState.error = ''
            draftState.isLoading = true
            return draftState
        case 'success':
            draftState.isLoggedIn = true
            draftState.isLoading = false
         
            return draftState
        case 'error':
            draftState.error = action.message
            draftState.isLoggedIn = false
            draftState.isLoading = false
            return draftState
        case 'logout':
            draftState.isLoggedIn = false
            return draftState
        case 'visible':
            draftState.visible = !draftState.visible
            return draftState
        case 'invisible':
            draftState.visible = false
            return draftState
        case 'collapsed':
            draftState.collapsed = !draftState.collapsed
            return draftState
        default:
            return draftState
    }
}