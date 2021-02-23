import React, {Suspense,useState,useContext,useEffect} from 'react'
import { useHistory ,Link as LinkDom } from 'react-router-dom'
import { DispatchContext } from '../provider/app.provider'
import { Typography,Switch, Button , Form ,Input, Checkbox, Row, Col, Modal, DatePicker} from 'antd'

import { PageLoading } from './page.loading'
import { registerLottoCustomer } from './../services/lotto.service'
import { LottoCustomer } from './../types/app.type'
import { validateEmail, isPhonenumber } from './../common/helpers'

const { Title, Paragraph, Text, Link } = Typography;

export function LottoRegisPage() { 
    const dispatch = useContext(DispatchContext)
    useEffect(() => {
        dispatch && dispatch({type: 'showHead',showComponent: true})
    },[])
    const [form] = Form.useForm()
    let history = useHistory()
    const [error, setError] = useState<boolean>(false);
    const errorAlert = error ? <Row>
                                    <Col span="8"></Col>
                                    <Col span="16">                                    
                                    </Col>
                                </Row> : ''
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);
    const [ellipsis, setEllipsis] = React.useState(true);
 
    const onFinish = async (values: any) => {
        setSubmitLoading(true)
        if(!values.termOfConditionFlag || !values.dataAcceptedFlag){
            Modal.error({
                title: 'Input Error',
                content: 'Term of condition is required',
            }) 
            setSubmitLoading(false)
            return Promise.resolve(false);
        }else{
            let jsonPostReq : LottoCustomer 
            jsonPostReq = Object.assign({
                firstname: values.firstname,
                lastname: values.lastname,
                telephone: values.telephone,
                citizen: values.citizen,
                email: values.email,
                code: values.code,
                invoice: values.invoice,
                paymentdate: values.purchasedate,
                termOfConditionFlag: values.termOfConditionFlag,
                dataAcceptedFlag: values.dataAcceptedFlag
            })

            let data = await registerLottoCustomer(jsonPostReq)
            if(data.code !== 200 && data.message !== 'Success'){
                let desc = ''
                if(data.message === 'Code is invalid of date'){
                    desc = 'รหัสชิงโชค ไม่ตรงวันที่ทำรายการ หรือเกินกำหนดเวลาตามที่ระบุไว้'
                }else if(data.message === 'Code was registered'){
                    desc = 'รหัสชิงโชค เคยลงทะเบียนไปแล้ว '
                }else if(data.message === 'Code is invalid'){
                    desc = 'รหัสชิงโชคไม่ถูกต้อง '
                }else if(data.message === 'Code is error'){
                    desc = 'รหัสชิงโชคไม่ถูกต้อง '
                }else{
                    desc = 'รหัสชิงโชคไม่ถูกต้อง '
                }
                Modal.error({
                    title: 'Unsuccesful',
                    content: 'การลงทะเบียนชิงโชคไม่สำเร็จ : '+desc,
                }) 
               
            }else{
                Modal.success({
                    title: 'Succesful',
                    content: 'การลงทะเบียนชิงโชคสำเร็จ',
                }) 
                dispatch && dispatch({type: 'showHead',showComponent: false})
                history.push("/thank")
            }
            //alert(JSON.stringify(data))
            setSubmitLoading(false)
            return Promise.resolve(true);
        }
        //console.log(phonenumber(values.telephone))
    };
    const onFailed = (errorObject: any) => {
        //console.log(errorObject);
        if(errorObject.errorFields.length > 0){
            errorObject.errorFields.map( (errItm: any) => {
                let content = ''
                if(errItm.name[0] === 'firstname'){
                    content = 'Firstname is required'
                }else if(errItm.name[0] === 'lastname'){
                    content = 'Lastname is required'
                }else if(errItm.name[0] === 'telephone'){
                    content = 'Mobile Phone No. is required'
                }else if(errItm.name[0] === 'citizen'){
                    content = 'Citizen ID is required'
                }else if(errItm.name[0] === 'code'){
                    content = 'Code No. is required'
                }else if(errItm.name[0] === 'invoice'){
                    content = 'Invoice No. is required'
                }else if(errItm.name[0] === 'purchasedate'){
                    content = 'Purchase date is required'
                }
                Modal.error({
                    title: 'Warning',
                    content: content,
                }) 
                return null
            })
        }
       
    }

    const checkMobile = (_: any, value: string ) => {
        //console.log(_)
        //console.log(value)
        //if (value > 0) {
        if(isPhonenumber(value)){    
          return Promise.resolve();
        }
        return Promise.reject('Mobile No. is required 10 digits!');
    };

    const checkEmail = (_: any, value: string ) => {
        if(value.length > 0){
            if(validateEmail(value)){    
                return Promise.resolve();
            }
            return Promise.reject('Your email is invalid');
        }
        return Promise.resolve('');
    };

    return (
        <Suspense fallback={<PageLoading loading={true} />}>
            <div className="tpc-form" style={{
                    //margin: '8px 16px',
                    margin: '0px 0px',
                    padding: '0 8px 16px',
                    // background: 'linear-gradient(to bottom,#005a28 0,#006A31 100%)'
                    backgroundColor: '#00703c',
                    minHeight: 'calc(100vh * 1.5 )', 
                    // (45px + 45px) 
                }}>
               { errorAlert }
               <Form
                    form={form}
                    layout="vertical"
                    name="form_tpc_lotto"
                    className="ant-advanced-search-form"
                    onFinish={onFinish}
                    onFinishFailed={onFailed}
                    initialValues={{ 
                        termOfConditionFlag: true,
                        dataAcceptedFlag: true
                    }}
                >
                <Form.Item name="firstname" label="ชื่อ / First Name"  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="lastname" label="นามสกุล / Last Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="citizen" label="เลขที่บัตรประชาชน / Citizen ID." rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="telephone" label="เบอร์มือถือ / Mobile Phone No." rules={[{ required: true, validator: checkMobile }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="อีเมล / Email (ถ้ามี)"  rules={[{ validator: checkEmail }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="code" label="รหัสร่วมลุ้นโชค / Code No." rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="invoice" label="เลขที่ใบเสร็จ / Invoice No." rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="purchasedate" label="วันที่ซื้อสินค้า / Purchase Date" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>

                <Form.Item className="send_button">
                    <Button type="primary" size="large"  htmlType="submit" loading={submitLoading} className="lotto-form-button" shape="round">
                    ส่งข้อมูล
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Form.Item name="termOfConditionFlag" valuePropName="checked" noStyle>
                        <Checkbox>ฉันได้อ่านและยอมรับ 
                        <Link href="https://www.1112.com/terms" style={{fontSize: '24px'}} target="_blank">
                         ข้อกำหนดการใช้งาน </Link> ของเดอะ พิซซ่า คอมปะนี 
                        </Checkbox>
                    </Form.Item>
                    <Form.Item name="termOfConditionEnFlag" valuePropName="checked" noStyle>
                      <Text style={{fontSize: '20px'}}> I have read and accept the &nbsp;
                      <Link href="https://www.1112.com/terms" style={{fontSize: '20px'}} target="_blank">
                       Terms and Conditions</Link> of The Pizza Company</Text>
                    </Form.Item>
                   
                </Form.Item>
               
                <Form.Item>
                <Form.Item name="dataAcceptedFlag" valuePropName="checked" noStyle >
                        <Checkbox>ฉันยินยอมให้เดอะ พิซซ่า คอมปะนี และ &nbsp;
                        <Link href="https://www.minor.com/en/affiliated-companies" style={{fontSize: '24px'}} target="_blank">
                         บริษัทในเครือ </Link>เก็บรวบรวมใช้ประมวลผล หรือเปิดเผยข้อมูลส่วนบุคคล ตาม
                         <Link href="https://www.1112.com/privacy" style={{fontSize: '24px'}} target="_blank">
                         นโยบายความเป็นส่วนตัว</Link> ของเดอะ พิซซ่า คอมปะนี
                         </Checkbox>
                    </Form.Item>
                     <a className="login-form-forgot" href="">
                    Forgot password
                    </a> 
                    <Form.Item name="dataAcceptedEnFlag" valuePropName="checked" noStyle>
                      <Text style={{fontSize: '20px'}}> I consent The Pizza Company and  &nbsp;
                      <Link href="https://www.minor.com/en/affiliated-companies"  style={{fontSize: '20px'}} target="_blank">
                      affiliated companies</Link> to collect, process or disclose my personal information according to the 
                      <Link href="https://www.1112.com/privacy"  style={{fontSize: '20px'}} target="_blank">
                      Privacy Policy </Link>
                      of The Pizza Company </Text>
                    </Form.Item>
                </Form.Item>
            </Form>
            </div>
        </Suspense>
    )
}