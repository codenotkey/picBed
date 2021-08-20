import AV , {Query, User} from 'leancloud-storage'
import resolve from "resolve";

AV.init({
    appId:'qUoILAETnUgzCrW0yiziLHlw-MdYXbMMI',
    appKey:'NgDxLfs1De0WmqEoLr8bGn6m',
    serverURL:'https://quoilaet.api.lncldglobal.com'
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

const Uploader = {
    add(file,filename){
        // avFile.save(
        //         {
        //             onprogress: (progress) => {
        //                 fielUrl = progress.percent
        //                 console.log(progress.percent);
        //                 console.log('保持中');
        //             }
        //         }
        // ).then((file) => {
        //     file.url()
        // }, (error) => {
        //     console.log(error)
        // });

        const item = new AV.Object('Image');
        const avFile = new AV.File(filename, file);
        item.set('filename', filename);
        item.set('owner', AV.User.current());
        item.set('url', avFile);
        return new Promise((resolve,reject)=>{
            item.save().then(serverFile => resolve(serverFile),error => reject(error))
        })
    },
    find({page=0,limit=10}){
        const query = new AV.Query('Image')
        query.include('owner')
        query.limit(limit)
        query.skip(page*limit)
        query.descending('createdAt')
        query.equalTo('owner', AV.User.current())
        return new Promise((resolve,reject)=>{
            query.find()
                .then(results => resolve(results))
                .catch(error => reject(error))
        })
    },
    // delete(picId){
    //     const item = AV.Object.createWithoutData('Image', picId);
    //     item.destroy();
    //     return new  Promise((resolve,reject)=>{
    //         item.destroy().then(()=> resolve('删除成功'))
    //                       .catch(error => reject(error))
    //     })
    // }
}
export {Auth,Uploader}
