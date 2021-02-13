import React ,{useContext,useEffect} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {  StateContext } from '../provider/app.provider'

import { Layout } from 'antd'
import { LottoRegisPage } from '../pages/lotto.regis.page'
import { NotFoundPage } from '../pages/404.page'


export const AppContent = () => {
    const state = useContext(StateContext)
    // useEffect( () => {
    //     console.group('INTO AppContent::STATECONTEXT')
    //     console.dir(state)
    //     console.groupEnd()
    // })
    return (
        <Router>
            <Layout.Content
                style={{
                    margin: '8px 16px',
                    padding: '0 8px 16px',
                }}
            >
                <Switch>
                    <Route exact path={["/"]} component={NotFoundPage} /> 
                    <Route exact path={["/app/lotto_register"]} component={LottoRegisPage} />
                </Switch>
            </Layout.Content>
        </Router>
    )
}