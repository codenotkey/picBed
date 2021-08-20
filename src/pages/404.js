import { Result, Button } from 'antd';
import React from "react";
import {NavLink, useHistory,} from "react-router-dom";
import styled from "styled-components";

// const Link = styled(NavLink)`
//   background-color: #40a9ff;
//   border-radius: 15px;
//   padding: 10px;
//   color: white;
// `


function errorPage(){
    return(
        <Result
            status="404"
            title="404"
            subTitle="抱歉，你输入的路径有误"
            extra={<Button type="primary" shape={'round'}><NavLink to='/' activeClassName='active' > 返回首页</NavLink></Button>}
        />
    )
}
export  default  errorPage
