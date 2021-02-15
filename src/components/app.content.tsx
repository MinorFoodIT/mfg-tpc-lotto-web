import React ,{useContext,useEffect} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {  StateContext } from '../provider/app.provider'

import { Layout } from 'antd'
import { LottoRegisPage } from '../pages/lotto.regis.page'
import { NotFoundPage } from '../pages/404.page'


export const AppContent = () => {
    const state = useContext(StateContext)
    
    return (
        <Router>
            <Layout.Content
                style={{
                    //margin: '8px 16px',
                    margin: '0px 0px',
                    padding: '0 8px 16px',
                    background: 'linear-gradient(to bottom,#005a28 0,#006A31 100%)'
                }}
            >
                <Switch>
                    <Route exact path={["/"]} component={NotFoundPage} /> 
                    <Route exact path={["/lotto_register"]} component={LottoRegisPage} />
                </Switch>
            </Layout.Content>
        </Router>
    )
}