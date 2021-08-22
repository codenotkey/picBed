import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {List,Spin,Button,Popconfirm,message} from 'antd'
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroller';
import copy from 'copy-to-clipboard';


const Img = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
  border: 1px solid #eee;
`;

const Component = observer(()=>{
    const {HistoryStore} = useStores()

    useEffect(()=>{
        return ()=>{
            HistoryStore.reset()
        }
    },[])

    const loadMore = ()=>{
        HistoryStore.find()
    }

    // const [list,setList] = useState(HistoryStore.list)
    // console.log('----1');
    // console.log(list);
    // console.log('----2');
    // console.log(HistoryStore.list)
    const handleCopy= (value) =>{
        copy(value)
        message.info('链接复制成功')
    }
    const handleDelete =(picId,index) =>{
        console.log('this is index'+index)
        HistoryStore.deleteItem(picId,index)
    }

    return (
        <div>
            <h1>上传历史</h1>
            <InfiniteScroll
                initialLoad={true}
                pageStart={0}
                loadMore={loadMore}
                hasMore={!HistoryStore.isLoading&&HistoryStore.hasMore}
                useWindow={true}
            >
                <List
                    dataSource={HistoryStore.list}
                    renderItem={(item,index) =>
                        <List.Item key={index} actions={[
                                <Button type={'link'} key="list-loadmore-edit" onClick={()=>handleCopy(item.attributes.url.attributes.url)}>复制链接</Button>,
                                <Button type={'link'} danger key="list-loadmore-more" onClick={()=>handleDelete(item.id,index)} >删除图片</Button>
                        ]}>
                            <List.Item.Meta
                                avatar={<Img src={item.attributes.url.attributes.url} />}
                                title={<a href={item.attributes.url.attributes.url}>{item.attributes.filename}</a>}
                                description={item.attributes.url.attributes.url}
                            />
                        </List.Item>
                    }
                >
                    { HistoryStore.isLoading && HistoryStore.hasMore && (
                        <div>
                            <Spin tip="加载中"/>
                        </div>
                    )}
                </List>
            </InfiniteScroll>
        </div>
    )
})
export default Component
