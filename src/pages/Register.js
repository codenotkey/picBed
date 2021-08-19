import React from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {Form, Input,Checkbox,Button} from "antd";
import styled from "styled-components";
import {Auth} from "../model";
import {useHistory} from 'react-router-dom'

const Content = styled.div`
  max-width: 600px;
  margin: 10vh auto ;
  box-shadow: 1px 1px 2px 1px rgba(38, 38, 38, 0.25);
  padding: 20px;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
`

const Component = observer(()=>{
    const {AuthStore} = useStores()
    const history = useHistory()
    const onFinish = (values) => {
        AuthStore.setUsername(values.username)
        AuthStore.setPassword(values.password)
        AuthStore.register()
            .then(()=>{
                console.log('注册成功！');
                history.push('/')
            })
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const validateUsername = (rule,value)=>{
        if(/\W/.test(value)) return Promise.reject('用户名只可以包含字母和下划线')
        return Promise.resolve()
    }

    const validateConfirm = ({getFieldValue})=>({
        validator(rule,value){
            if(getFieldValue('password') === value) return Promise.resolve();
            return Promise.reject('两次密码不相同')
        }
    })
    return (
        <Content>
            <Title>注册</Title>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18}}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        { required: true, message: '请输入用户名！' },
                        {validator:validateUsername},
                        // {min:4,message:'最小4个字符'},
                        // {min:10,message:'最大10个字符'},
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        { required: true, message: '请输入密码！' },
                        {min:4,message:'最少4个字符'},
                        {max:10,message:'最多10个字符'}
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="确认密码"
                    name="confirmPassword"
                    rules={[{ required: true, message: '请确认密码！' },validateConfirm]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    );
})

export  default  Component
