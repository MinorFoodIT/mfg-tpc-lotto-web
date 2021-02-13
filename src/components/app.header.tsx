import React, { useContext } from 'react'
import { DispatchContext, StateContext } from '../provider/app.provider'
import { Layout} from 'antd'
// import { MenuHeader } from './menu.header'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import './../styles/main.css'; 

export const AppHeader = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    const toggle = () => {
        dispatch && dispatch({type: 'collapsed'})
    }

    return (
        <Layout.Header className="site-layout-background" style={{ padding: '0 0px',height: '100vh' ,width: '100vh' }}>
            { 
            <div className="header">
                <img src="https://cdn.1112delivery.com/1112one/public/images/banners/Feb2021/TPC_NY_CNY_R1_1242_TH.jpg" width="100vh" height="100vh" /> </div>
                // state.isLoggedIn && 
                // <div className="container">
                //     {
                //         React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                //             className: 'trigger',
                //             onClick: toggle,
                //         })
                //     }
                //     {/* <MenuHeader /> */}
                // </div>
            }
        </Layout.Header>
    )
}