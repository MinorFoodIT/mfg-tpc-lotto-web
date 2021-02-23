import React ,{useContext,useEffect}from 'react'
import { DispatchContext } from '../provider/app.provider'
import { Link } from 'react-router-dom'
import { Image,Modal } from 'antd'
import logoThank from './images/logo_thank.png'
import guideLoadApp from './images/guide_load_app.png'

type Props = {
    loading: boolean
}
export const LottoThankPage = (props: Props) => {
    const { loading } = props
    const dispatch = useContext(DispatchContext)

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    useEffect(() => {
        scrollTop();
        dispatch && dispatch({type: 'showHead',showComponent: false})
    },[])

    return (
        <div style={{ paddingTop: '5%', textAlign: 'center' , backgroundColor: '#005e2c' , minHeight: 'calc(100vh * 1.4 )', }}> 
            <br/>
            <section className="height-100vh center-aligned">
                <Image preview={false}  src={logoThank} style={{ width: '100vmin' }} /> 
            </section>
            <br/> 
            <div style={{padding: 0}}>
                <p style={{color: 'white' , fontSize: '36px' , fontWeight: 'bold', marginBottom: -10 }}>รับรหัสเรียบร้อยแล้ว</p>
                <p style={{color: 'white' , fontSize: '24px' , fontWeight: 'bold', marginBottom: 5 }}>ขอบคุณลูกค้าคนสำคัญที่ร่วมกิจกรรมเรา</p>
                <Link to={'/info'} style={{ fontSize: '24px' , textDecoration: 'underline' ,color:  '#d8df7d'}}>รายละเพิ่มเติม</Link>
            </div>
            
            <p style={{color: '#d8df7d' ,fontSize: '24px',marginBottom: -10 }}> กรอกรหัสและโปรดเก็บใบเสร็จ</p>
            <p style={{color: '#d8df7d' ,fontSize: '24px',marginBottom: -10 }}> พร้อมถ่ายรูป ไว้เป็นหลักฐานเพื่อยืนยันรับรางวัลใหญ่</p>

 
            <br/> 
            <Image preview={false}  src={guideLoadApp} style={{ width: '100vmin' }} /> 
      
        </div>
    )
}