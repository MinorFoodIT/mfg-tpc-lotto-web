import React, { useContext } from 'react'
import { DispatchContext } from '../provider/app.provider'
import { Layout, Image} from 'antd'
// import { MenuHeader } from './menu.header'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
//import logoHead from './images/logo_iphone_x.png'
import logoHead from './images/main_logo_luckydraw.png'

export const AppHeader = () => {
    const dispatch = useContext(DispatchContext)

    const toggle = () => {
        dispatch && dispatch({type: 'collapsed'})
    }

    return (
        <Layout.Header className="site-layout-background" >
            { 
              <Image preview={false} src={logoHead} style={{ width: '100vw' }} /> 
            }
        </Layout.Header>
    )
}