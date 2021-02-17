import React ,{useContext,useEffect}from 'react'
import { DispatchContext } from '../provider/app.provider'
import { Image,Divider,Row,Col } from 'antd'

type Props = {
    loading: boolean
}
export const LottoThankPage = (props: Props) => {
    const { loading } = props
    const dispatch = useContext(DispatchContext)

    useEffect(() => {
        dispatch && dispatch({type: 'showHead',showComponent: false})
    },[])

    return (
        <div style={{ paddingTop: '5%', textAlign: 'center' ,color: '#f9f9f9'}}>
            <Image  width={200}
                    src={`https://cdn.1112.com/1112/public/images/logo.svg`} />
            <Divider />        
            <p>ขอบคุณที่ร่วมกิจกรรมกับทางเดอะ พิซซ่า คอมปะนี</p>
            <p>โปรดเก็บใบเสร็จเป็นหลักฐานเพื่อรับรางวัล</p>
            <p>และติดตามผลการจับรางวัลได้ที่</p>
            <p>www.facebook.com/thepizzacompany</p>
            <p>หรือทาง The Pizza Companay Line Official Account</p>
            <Divider />  
            <p>ติดตามข่าวสารหรือโปรโมชั่นได้ที่</p>
            <p>The Pizza Companay application</p>

            <div style={{textAlign: 'center',  display: 'flex' ,flexWrap: 'wrap' ,width: '100%'}}>
                <Row>
                    <Col span="4"></Col>
                    <Col span="8" onClick={() => alert('google')} style={{ margin: '8px' }}><Image  preview={false} width={ '30%vw' }
                    src={`../../google-play.png`} />
                    </Col>
                    <Col span="8" onClick={() => alert('appstore')} style={{ margin: '8px' }}><Image preview={false}  width={'30%vw'}
                    src={`../../appstore.png`} />
                    </Col>
                    <Col span="4"></Col>
                </Row>
            </div>
        </div>
    )
}