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
  box-shadow: 0 0 8px 0 rgba(28,31,33,.1);
`
const Logo = styled(NavLink)`
  font-size: 18px;
  color:  #004fff;
`
const StyledLink = styled(NavLink)`
  color: #423f3f;
  margin-left: 30px;

  &.active {
    color:#004fff;
    padding-bottom: 2px;
    border-bottom: 2px solid #4680ff;
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
            <Logo to='/' activeClassName='active' exact>PicBed</Logo>
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
