import React from "react";
import Uploader from "../components/Uploader";
import Tips from "../components/Tips";

function Home(){
    return(
        <>
            <Tips>登录以后方可使用</Tips>
            <Uploader/>
        </>
    )
}
export default Home
