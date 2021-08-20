import {action, observable} from "mobx";
import {Uploader} from "../model";
import {message} from "antd";

class historyStore{
    @observable list = []
    @observable isLoading = false
    @observable hasMore = true
    @observable page = 0
    limit = 10

    @action append(newList){
        this.list = this.list.concat(newList)
    }

    @action find(){
        this.isLoading = true
        Uploader.find({page:this.page,limit:this.limit})
            .then(newList =>{
                this.append(newList)
                this.page ++
                if(newList.length<this.limit){
                    this.hasMore = false
                }
                console.log(this.list)
            })
            .catch(error =>{
                message.error('数据加载失败')
            })
            .finally(()=>{
                this.isLoading = false
            })
    }

    // @action deleteItem(picId,index){
    //     // this.list.splice(index,1)
    //     Uploader.delete(picId)
    //         .then(result =>{
    //             // this.list.splice(index,1)
    //             message.info('删除成功')
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    // }

    @action reset(){
        this.list = []
        this.isLoading = false
        this.hasMore = true
        this.page = 0
    }

}

export  default  new historyStore()
