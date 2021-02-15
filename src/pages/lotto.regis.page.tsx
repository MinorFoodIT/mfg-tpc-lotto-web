import React, {Suspense} from 'react'
import { useHistory } from 'react-router-dom'
import { Button ,Divider, Form ,Input, Checkbox} from 'antd'
import { LogoutOutlined } from '@ant-design/icons';
import { PageLoading } from './page.loading'
import './../styles/main.css'; 


export function LottoRegisPage() { 
    const [form] = Form.useForm()
    let history = useHistory()

    return (
        <Suspense fallback={<PageLoading loading={true} />}>
            <div className="tpc-form">
               <div className="p_center">
                    <p>ลงทะเบียนเพื่อลุ้นรับรางวัลจากกิจกรรม</p>
                    <p>ฉลองครบรอบ 20 ปี เดอะพิซซ่าคอมปะนี</p>
                    <p>แจก Honda Scoopy | 20 คัน</p>
                    <p>และของรางวัลอีกมากมาย</p>
                    <p>รวมมูลค่ามากกว่า 1,000,000 บาท</p>               
               </div> 

               <Divider />
               <Form
                    form={form}
                    layout="vertical"
                    name="form_tpc_lotto"
                    className="ant-advanced-search-form"
                    initialValues={{ 
            
                    }}
                >
                <Form.Item name="firstname" label="ชื่อ / First Name"  rules={[{ required: true, message: 'First name is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="lastname" label="นามสกุล / Last Name" >
                    <Input />
                </Form.Item>
                <Form.Item name="telephone" label="เบอร์มือถือ / Mobile No." rules={[{ required: true, message: 'Mobile no. is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="อีเมล / Email">
                    <Input />
                </Form.Item>
                <Form.Item name="code" label="รหัล / Code" rules={[{ required: true, message: 'Code is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="agree1" valuePropName="checked" noStyle>
                        <Checkbox>ฉันยอมรับเงื่อนไขในกิจกรรมและต้องการรับข้อมูลข่าวสารและโปรโมชั่นจาก เดอะพิซซ่าคอมปะนี</Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                    Forgot password
                    </a> */}
                </Form.Item>
                <Form.Item>
                    <Form.Item name="agree2" valuePropName="checked" noStyle>
                        <Checkbox>ฉันต้องการรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จาก เดอะ พิซซ่า คอมปะนี และบริษัทในเครือ โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ</Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                    Forgot password
                    </a> */}
                </Form.Item>

                <Form.Item className="send_button">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    ส่งข้อมูล
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </Suspense>
    )
}