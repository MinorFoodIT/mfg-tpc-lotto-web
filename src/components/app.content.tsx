import React ,{useContext} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {  StateContext } from '../provider/app.provider'

import { Layout } from 'antd'
import { LottoRegisPage } from '../pages/lotto.regis.page'
import { NotFoundPage } from '../pages/404.page'
import { LottoThankPage } from './../pages/lotto.thank.page'
import { callbackify } from 'util'

export const AppContent = () => {
    const state = useContext(StateContext)
    
    return (
        <Router>
            <Layout.Content>
                <Switch>
                    <Route exact path={["/"]} component={NotFoundPage} /> 
                    <Route exact path={["/lotto.register"]} component={LottoRegisPage} />
                    <Route exact path={["/lotto.thank"]} component={LottoThankPage} />
                </Switch>
            </Layout.Content>
        </Router>
    )
}