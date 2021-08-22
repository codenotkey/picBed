import {action, observable} from "mobx";
import {Uploader} from "../model";
import {message} from "antd";
import React from "react";

class historyStore{
    @observable list = []
    @observable isLoading = false
    @observable hasMore = true
    @observable page = 0
    my = []
    limit = 10

    @action append(newList){
        this.list = this.list.concat(newList)
    }

    @action find(){
        console.log('触发查找方法')
        this.isLoading = true
        Uploader.find({page:this.page,limit:this.limit})
            .then(newList =>{
                this.append(newList)
                this.page ++
                if(newList.length<this.limit){
                    this.hasMore = false
                }
                // console.log(this.list)

            })
            .catch(error =>{
                message.error('数据加载失败')
            })
            .finally(()=>{
                this.isLoading = false
            })
    }

    @action deleteItem(picId,index){
        Uploader.delete(picId)
            .then(result =>{
                let temp =  [...this.list]
                temp.splice(index,1)
                this.list = temp
                message.info('删除成功')
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    // @action add(){
    //     this.my.splice(1,1)
    // }

    @action reset(){
        this.list = []
        this.isLoading = false
        this.hasMore = true
        this.page = 0
    }

}

export  default  new historyStore()
