import AV , {Query, User} from 'leancloud-storage'

AV.init({
    appId:'MbcRYxSG7Ri9RrhLisAYJHau-gzGzoHsz',
    appKey:'UV8V9AAdvDjhfq0R9zpQ8GBB',
    serverURL:'https://mbcryxsg.lc-cn-n1-shared.com'
})

const Auth = {
    register(username,password){
        let user = new User()
        user.setUsername(username)
        user.setPassword(password)
        return new Promise((resolve,reject)=>{
            user.signUp().then(loginedUser => resolve(loginedUser),
                error =>reject(error)
                )
        })
    },
    login(username,password) {
        return new Promise((resolve,reject)=>{
            User.logIn(username,password).then(loginedUser=>resolve(loginedUser),error => reject(error))
        })
    },
    getCurrentUser(){
        return User.current()
    },
    logout(){
        User.logOut()
    }
}
export {Auth}
