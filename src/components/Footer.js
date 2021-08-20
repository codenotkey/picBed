import React from "react";
import styled from 'styled-components'
import gitIcon from './GitHub.svg'

const Footer = styled.footer`
  padding: 10px 100px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  display: flex;
  justify-content: center;
`
const FootA = styled.a`
  color: #24292f;
  font-size: 16px;
`
const FootImg = styled.img`
  height: 24px;
  margin-right: 4px;
`

function Component(){
    return(
        <Footer>
            <FootImg src={gitIcon}/>
            <FootA href={'https://github.com/codenotkey/picBed'}>项目源码连接</FootA>
        </Footer>
    )
}
export default Component
