import React from "react";
import styled from "styled-components";

const Content = styled.div`
 margin: auto;
`
const MyStrong = styled.strong`
  color: orangered;
  border:1px ;
`

function About(){

    return(
        <Content>
            <h1>关于项目的介绍</h1>
            <h2>1. 技术栈 :<MyStrong> React / ReactRouter / Mobx / LeanCloud / Antd 等</MyStrong></h2>
            <h2>2. 完成的功能 : <MyStrong>登录 / 注册 / 上传图片 / 查看历史记录 / 删除上传的图片等</MyStrong></h2>
            <h2>3. 项目总计花费<MyStrong> 4天</MyStrong></h2>
            <h2>4. 因服务器的特殊性,故设计为登录后才可以使用</h2>
        </Content>
    )
}
export default About
