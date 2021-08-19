import React, {useEffect} from "react";
import styled from 'styled-components'
import LogoUrl from './logo192.png';
import {NavLink, useHistory,} from "react-router-dom";
import {Button} from "antd";
import {useStores} from "../stores";
import {observer} from 'mobx-react'


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
`
const Logo = styled.span`
  font-size: 18px;
  color: #4680ff;
`
const StyledLink = styled(NavLink)`
  color: #423f3f;
  margin-left: 30px;

  &.active {
    border-bottom: 1px solid white;
  }
`
const  Login = styled.div`
  //margin-left: auto;
`
const  StyledButton = styled(Button)`
  margin-left: 10px;
`

const Component = observer(()=>{
    const history = useHistory()
    const {AuthStore,UserStore} = useStores()

    const handleLogin = ()=>{
        console.log('跳转登录也');
        history.push('/login')
    }
    const handleRegister = ()=>{
        console.log('跳转注册页');
        history.push('/register')
    }
    const handleLogout = ()=>{
        AuthStore.logout()
    }
    useEffect(()=>{
      UserStore.pullUser();
    },[])
    // console.log('111');
    // console.log(UserStore);
    return(
        <Header>
            <nav>
                <StyledLink to='/' activeClassName='active' exact>首页</StyledLink>
                <StyledLink to='/history' activeClassName='active' >历史</StyledLink>
                <StyledLink to='/about' activeClassName='active' >关于</StyledLink>
            </nav>
            <Logo>PicBed</Logo>
            <Login>{
                    UserStore.currentUser ?
                    <>
                    你好！{UserStore.currentUser.attributes.username}
                        <StyledButton type="primary" shape="round" onClick={handleLogout}>注销</StyledButton>
                    </>
                    :
                    <>
                        <StyledButton type="primary" shape="round" onClick={handleLogin}>
                            登录
                        </StyledButton>
                        <StyledButton type="primary" shape="round"  onClick={handleRegister}>
                            注册
                        </StyledButton>
                    </>
            }

            </Login>
        </Header>
    )
})
export default Component
