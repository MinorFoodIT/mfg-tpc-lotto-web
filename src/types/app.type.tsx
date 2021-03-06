export type State = {
    //user: User,
    //data: Data
    displayHead: boolean
    isLoading?: boolean
    isLoggedIn?: boolean
    error?: string
    visible?: boolean
    collapsed?: boolean
}

export type LottoCustomer = {
    firstname: string
    lastname: string
    telephone: string
    citizen: string
    email: string
    code: string
    termOfConditionFlag: boolean
    dataAcceptedFlag: boolean
}

interface SetFieldAction { 
    type: 'field', fieldName: string, payload: string 
}

interface SetLogInAction { 
    type: 'login' 
}

interface SetSuccessAction {
    type: 'success' ,role: string ,sitegroup: string
}

interface SetErrorAction {
    type: 'error', message: string
}

interface SetLogOutAction {
    type: 'logout'
}

interface SetVisibleAction {
    type: 'visible'
}

interface SetInVisibleAction {
    type: 'invisible'
}

interface SetCollapsedAction {
    type: 'collapsed'
}

interface SetHeadAction {
    type: 'showHead', showComponent: boolean
}

export type AuthenticationAction = 
| SetFieldAction 
| SetLogInAction 
| SetSuccessAction 
| SetErrorAction 
| SetLogOutAction 
| SetVisibleAction 
| SetInVisibleAction 
| SetCollapsedAction
| SetHeadAction