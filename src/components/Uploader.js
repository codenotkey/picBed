import React, {useRef} from "react";
import {observer, useLocalStore} from "mobx-react";
import {Upload, message, Spin,Progress,Button} from 'antd'
import {useStores} from "../stores";
import styled from "styled-components";
import { InboxOutlined } from '@ant-design/icons';
import copy from "copy-to-clipboard";

const {Dragger} = Upload

const Result = styled.div`
  margin-top: 10px;
  border: 1px dashed #ccc;
  padding: 20px;
`

const H1 = styled.h1` 
    margin: 20px 0;
    text-align: center;
`

const Image = styled.img`
   max-width: 300px;
`


const Component = observer(()=>{
    const {ImageStore,UserStore} = useStores()
    const  ref1 = useRef()
    const ref2 = useRef()

    const store = useLocalStore(()=>({
        width:null,
        height:null,

        setWidth(width){
            store.width = width
        },
        setHeight(height){
            store.height = height
        },

        get WidthStr(){
            return store.width?`/w/${store.width}`:''
        },
        get heightStr(){
            return store.height?`/h/${store.height}`:''
        },
        get fullStr(){
            return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.WidthStr + store.heightStr
        }
    }))
    const bindWidthChange = ()=>{
        store.setWidth(ref1.current.value)
    }
    const bindHeightChange = ()=>{
        store.setHeight(ref2.current.value)
    }
    const handleCopy= (value) =>{
        copy(value)
        message.info('链接复制成功')
    }
    const props={
        showUploadList:false,
        beforeUpload:file =>{
            ImageStore.setFilename(file.name)
            ImageStore.setFile(file)
            if(UserStore.currentUser === null){
                message.warn('登录之后再上传')
                return false
            }
            if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
                message.error('只能上传png/svg/jpg/gif格式的图片');
                return false;
            }
            if (file.size > 1024 * 1024) {
                message.error('图片最大1M');
                return false;
            }
            ImageStore.upload()
                .then((serverFile)=>{
                    console.log('上传成功')
                    console.log(serverFile);
                }).catch((err)=>{
                // console.log(err);
                // console.log(ImageStore.filename)
                console.log('上传失败')
            })
            return  false
        }
    }

    return (
        <div>
            <Spin tip={'上传中'} spinning={ImageStore.isUploading}>
                <Dragger {...props} >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击或者拖拽文件到此区域上传</p>
                    <p className="ant-upload-hint">
                        只能上传png/svg/jpg/gif格式的图片,图片最大1M。
                    </p>
                </Dragger>
            </Spin>
            {
                ImageStore.serverFile ? <Result>
                    <H1>上传结果</H1>
                    <dl>
                        <dt>线上地址</dt>
                        <dd>
                            <a target="_blank" href={ImageStore.serverFile.attributes.url.attributes.url} style={{width:'50px'}}>{ ImageStore.serverFile.attributes.url.attributes.url}</a>
                        </dd>
                        <dt><Button type="primary" shape="round" onClick={()=>handleCopy(ImageStore.serverFile.attributes.url.attributes.url)}>复制链接</Button></dt>
                        <dt>文件名</dt>
                        <dd>{ImageStore.filename}</dd>
                        <dt>图片预览</dt>
                        <dd>
                            <Image src={ImageStore.serverFile.attributes.url.attributes.url}/>
                        </dd>
                        <dt>更多尺寸</dt>
                        <dd>
                            <input ref={ref1} onChange={bindWidthChange} placeholder="最大宽度（可选）"/>
                            <input ref={ref2} onChange={bindHeightChange} placeholder="最大高度（可选）"/>
                        </dd>
                        <dd>
                            <a  target="_blank" href={store.fullStr}>{store.fullStr}</a>
                        </dd>
                    </dl>
                </Result> : null
            }
        </div>
    )
})

export default Component
