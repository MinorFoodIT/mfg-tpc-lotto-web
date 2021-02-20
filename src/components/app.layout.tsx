import React ,{ useContext } from 'react'
import { Layout } from 'antd'
import { StateContext } from '../provider/app.provider'

import { AppHeader } from './app.header'
import { AppContent } from './app.content'
import { AppFooter } from './app.footer'
// import { MenuSider } from './menu.sider'

export function AppLayout() {
    const state = useContext(StateContext)
    return (
        <Layout>
         {/*  */}
            {/* <MenuSider /> */}
            <Layout className="site-layout"  >
                                {/* style={{  maxHeight: 'calc(140%)' }} */}
                        {/* minHeight: '100vh' */}
                { state.displayHead && <AppHeader />
                }
                <AppContent />
                {/* <AppFooter /> */}
            </Layout>
        </Layout>
    )
}