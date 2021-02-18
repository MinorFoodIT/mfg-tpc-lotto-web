import React ,{useContext,useEffect}from 'react'
import { DispatchContext } from '../provider/app.provider'
import { Image,Divider,Row,Col } from 'antd'
import appstore from './appstore.png' 
import googleplay from './google-play.png' 

type Props = {
    loading: boolean
}
export const LottoThankPage = (props: Props) => {
    const { loading } = props
    const dispatch = useContext(DispatchContext)

    useEffect(() => {
        dispatch && dispatch({type: 'showHead',showComponent: false})
    },[])

    // {process.env.PUBLIC_URL + `/../google-play.png`}
    return (
        <div style={{ paddingTop: '5%', textAlign: 'center' ,color: '#f9f9f9'}}>
            <br/>
            <Image  width={100}
                    src={`https://cdn.1112.com/1112/public/images/logo.svg`} />
            <br/>
            <br/>    
            <h1 style={{color: 'white' , fontSize: '24px'}}>ขอบคุณที่ร่วมกิจกรรมกับทางเดอะ พิซซ่า คอมปะนี</h1>
            <br/>
            <br/>
            <p>โปรดเก็บใบเสร็จเป็นหลักฐานเพื่อรับรางวัล</p>
            <p>และติดตามผลการจับรางวัลได้ที่</p>
            <p style={{color: '#f9c816'}}>www.facebook.com/thepizzacompany</p>
            <p>หรือ</p>
            <p style={{color: '#f9c816'}}>The Pizza Companay Line Official Account</p>
            <Divider />  
            <p>ติดตามข่าวสารหรือโปรโมชั่นได้ที่</p>
            <p>The Pizza Companay application</p>

            <div style={{textAlign: 'center',  display: 'flex' ,flexWrap: 'wrap' ,width: '100%'}}>
                <Row>
                    <Col span="4"></Col>
                    <Col span="8" onClick={() => alert('google')} style={{ margin: '8px' }}><Image  preview={false} width={ '30%vw' }
                    src={appstore} />
                    </Col>
                    <Col span="8" onClick={() => alert('appstore')} style={{ margin: '8px' }}><Image preview={false}  width={'30%vw'}
                    src={googleplay} />
                    </Col>
                    <Col span="4"></Col>
                </Row>
            </div>
        </div>
    )
}