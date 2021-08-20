import {action, observable} from "mobx";
import {Uploader} from '../model'

class ImageStore{
    @observable filename = ''
    @observable file = null
    @observable isUploading = false
    @observable serverFile = null

    @action setFilename(newFilename){
        this.filename = newFilename
    }

    @action setFile(newFile){
        this.file = newFile
    }

    @action upload(){
        this.isUploading = true
        return new Promise((resolve,reject)=>{
           Uploader.add(this.file,this.filename)
               .then(serverFile => {
                   this.serverFile = serverFile
                   resolve(serverFile)
               })
               .catch(err=>{
                   console.log('上传在调用阶段失败')
                   reject(err)
               }).finally(()=>{
                   this.isUploading = false
           })
        })
    }
}

export default new ImageStore()
