import React, {Suspense,useState,useContext} from 'react'
import { DispatchContext } from '../provider/app.provider'
import { useHistory } from 'react-router-dom'
import { Button ,Divider, Form ,Input, Checkbox, Row, Col, Modal, Card} from 'antd'
//import { LogoutOutlined } from '@ant-design/icons';
import { PageLoading } from './page.loading'
import { registerLottoCustomer } from './../services/lotto.service'
import { LottoCustomer } from './../types/app.type'


type errorMsg = {
    title: string
    content: string
}

export function LottoRegisPage() { 
    const dispatch = useContext(DispatchContext)
    const [form] = Form.useForm()
    let history = useHistory()
    const [error, setError] = useState<boolean>(false);
    const errorAlert = error ? <Row>
                                    <Col span="8"></Col>
                                    <Col span="16">
                                    {/* <Alert message="Form Failed" type="warning" banner closable></Alert> */}
                                    
                                    </Col>
                                </Row> : ''
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);
 
    //const [error_alert, setError_alert] = useState<errorMsg>();


    const onFinish = async (values: any) => {
        setSubmitLoading(true)
        if(!values.termOfConditionFlag){
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
                termOfConditionFlag: values.termOfConditionFlag,
                dataAcceptedFlag: values.dataAcceptedFlag
            })
            console.log(jsonPostReq)
            let data = await registerLottoCustomer(jsonPostReq)
            if(data.code !== 200 && data.message !== 'Success'){
                let desc = ''
                if(data.message === 'Code is invalid of date'){
                    desc = 'รหัสชิงโชค ไม่ตรงวันที่ทำรายการ '
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
                alert(history.location.pathname)
                alert(history.location.hash)
                history.push("/lotto.thank")
                alert(history.location.pathname)
                alert(history.location.hash)
            }
            //alert(JSON.stringify(data))
            setSubmitLoading(false)
            return Promise.resolve(true);
        }
        //console.log(phonenumber(values.telephone))
    };
    const onFailed = (errorObject: any) => {
        console.log(errorObject);
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
                }else if(errItm.name[0] === 'email'){
                    content = 'Email is required'
                }else if(errItm.name[0] === 'code'){
                    content = 'Code is required'
                }
                Modal.error({
                    title: 'Warning',
                    content: content,
                }) 
                return null
            })
        }
       
    }
    const isPhonenumber = (inputtxt: string) => 
    {
      //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      var phoneno = /^\d{10}$/;
      if( typeof inputtxt !== 'undefined' && inputtxt.match(phoneno))
      {
        return true;
      }else{
        return false;
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


    return (
        <Suspense fallback={<PageLoading loading={true} />}>
            <div className="tpc-form">
  
               <div className="p_center">
               <Card title="" bordered={false} className="p_center_card">
                    <p className="wrap_text">ลงทะเบียนเพื่อลุ้นรับรางวัลจากกิจกรรม</p>
                    <p className="wrap_text">ฉลองครบรอบ 20 ปี เดอะพิซซ่าคอมปะนี</p>
                    {/* <p>แจก Honda Scoopy | 20 คัน</p>
                    <p>และของรางวัลอีกมากมาย</p>
                    <p>รวมมูลค่ามากกว่า 1,000,000 บาท</p>  */}
               </Card>
                                 
               </div> 
               { errorAlert }
               <Divider />
               <Form
                    form={form}
                    layout="vertical"
                    name="form_tpc_lotto"
                    className="ant-advanced-search-form"
                    onFinish={onFinish}
                    onFinishFailed={onFailed}
                    initialValues={{ 
                        termOfConditionFlag: true,
                        dataAcceptedFlag: false
                    }}
                >
                <Form.Item name="firstname" label="ชื่อ / First Name"  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="lastname" label="นามสกุล / Last Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="citizen" label="บัตรประชน / Citizen ID." rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="telephone" label="เบอร์มือถือ / Mobile Phone No." rules={[{ required: true, validator: checkMobile }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="อีเมล / Email">
                    <Input />
                </Form.Item>
                <Form.Item name="code" label="รหัส / Code" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="termOfConditionFlag" valuePropName="checked" noStyle >
                        <Checkbox><u>ฉันยอมรับเงื่อนไขในกิจกรรมและต้องการรับข้อมูลข่าวสารและโปรโมชั่นจาก เดอะพิซซ่าคอมปะนี</u></Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                    Forgot password
                    </a> */}
                </Form.Item>
                <Form.Item>
                    <Form.Item name="dataAcceptedFlag" valuePropName="checked" noStyle>
                        <Checkbox>ฉันต้องการรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จาก เดอะ พิซซ่า คอมปะนี และบริษัทในเครือ โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ</Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                    Forgot password
                    </a> */}
                </Form.Item>

                <Form.Item className="send_button">
                    <Button type="primary" htmlType="submit" loading={submitLoading} className="lotto-form-button" shape="round">
                    ส่งข้อมูล
                    </Button>
                </Form.Item>

               

            </Form>
            </div>
        </Suspense>
    )
}