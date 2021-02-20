import React ,{useContext,useEffect}from 'react'
import { DispatchContext } from '../provider/app.provider'
import { Image,Divider,Row,Col } from 'antd'
import appstore from './images/appstore.png' 
import googleplay from './images/google-play.png' 
import thankLogo from './images/thank_logo.png' 
import smileLeft from './images/smile_left.png' 
import smileRight from './images/smile_right.png' 
import moreLighting from './images/more-lighting.png' 
import facebook from './images/facebook_line.png'
import goldhead from './images/gold-head.png'
import startleft from './images/star-left.png'
import startright from './images/star-right.png'
import logoThank from './images/logo_thank.png'
import guideLoadApp from './images/guide_load_app.png'

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
    // #f9f9f9
    return (
        <div style={{ paddingTop: '5%', textAlign: 'center' , backgroundColor: '#005e2c' , minHeight: 'calc(100vh * 1.4 )', }}> 
            <br/>
            <section className="height-100vh center-aligned">
                <Image preview={false}  src={logoThank} style={{ width: '100vmin' }} /> 
                {/* <Image preview={false} className="over-image-center-1" src={moreLighting} /> 
                <Image  className="over-image-center-2" src={thankLogo} /> 
                <Image preview={false} className="over-image-left" src={smileLeft} /> 
                <Image preview={false} className="over-image-right" src={smileRight} />    */}
            </section>
            <br/> 
            <div style={{padding: 0}}>
                <p style={{color: 'white' , fontSize: '36px' , fontWeight: 'bold', marginBottom: -10 }}>รับรหัสเรียบร้อยแล้ว</p>
                <p style={{color: 'white' , fontSize: '24px' , fontWeight: 'bold', marginBottom: 5 }}>ขอบคุณลูกค้าคนสำคัญที่ร่วมกิจกรรมเรา</p>
            </div>   
            <p style={{color: '#d8df7d' ,fontSize: '24px',marginBottom: -10 }}> กรอกรหัสแล้วอย่าเพิ่งทิ้งใบเสร็จ</p>
            <p style={{color: '#d8df7d' ,fontSize: '24px',marginBottom: -10 }}> โปรดเก็บไว้เป็นหลักฐานยืนยันรับรางวัลใหญ่</p>
            <br/> 
            <Image preview={false}  src={guideLoadApp} style={{ width: '100vmin' }} /> 
            {/* <div style={{padding: 0 }}>
                <p style={{color: 'white' , fontSize: '24px' , marginBottom: 0 }}>ติดตามผลได้เร็วๆ นี้ที่</p>
                
                <div className="border-box-facebook">
                    <Image preview={false} src={facebook} className="facebook-layout" />
                    <p style={{color: 'white' , fontSize: '24px' ,fontWeight: 'bold', marginBottom: 0 ,marginTop: -15 }}>The Pizza Company 1112</p>
                </div>
                <br/>
                
                 <div className="border-box-appstore">
                    <div className="box-goldtitle">
                        <p className="over-goldtitle" >พิเศษสำหรับลูกค้าใหม่</p>
                    </div>
                    <div style={{padding: '1px'}}>
                         <p style={{color: 'white' , fontSize: '18px' , marginBottom: -10 ,marginTop: -45 }}>เพียงโหลดแอปพลิเคชั่น เดอะ พิซซ่า คอมปะนี</p>
                         <p style={{color: 'white' , fontSize: '18px' , marginBottom: 0 ,marginTop: -15 }}>ก็รับส่วนลด 50 บาท* ในการสั่งอ่านหารครั้งแรก สแกนเลย</p>
                         <p style={{color: '#d8df7d' , fontSize: '10px' , marginBottom: 0 ,marginTop: 0 }}>*เมื่อสั่งอาหารขั้นต่ำ 200 บาท เพียงกรอกโค้ด NEW50 ตั้งแต่วันที่ 5 ก.พ. 2564 - 30 เม.ย. 2564</p>

                    </div>
                   
                    <Image preview={false} src={startleft} className="star-left-layout" />
                    <Image preview={false} src={startright} className="star-right-layout" />

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
            </div>   */}

            
            {/* <p style={{color: '#f9c816'}}>www.facebook.com/thepizzacompany</p>
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
            </div> */}
        </div>
    )
}