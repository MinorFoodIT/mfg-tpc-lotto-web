import React, { useContext } from 'react'
import { DispatchContext } from '../provider/app.provider'
import { Layout} from 'antd'
// import { MenuHeader } from './menu.header'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

export const AppHeader = () => {
    const dispatch = useContext(DispatchContext)

    const toggle = () => {
        dispatch && dispatch({type: 'collapsed'})
    }

    return (
        <Layout.Header className="site-layout-background" style={{ padding: '0 0px',height: '20vh' ,width: '100vw' }}>
            { 
            <div style={{height: '100%' ,width: '100%' }}>
                <img src="https://www.2u.in.th/wp-content/uploads/2020/02/Promotion-the-pizza-company-buy-1-free-1-for-2020-1024x680-1.jpg" style={{height: '100%' ,width: '100%' }}/> </div>
                //className="header"
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