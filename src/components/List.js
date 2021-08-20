import React, {useEffect} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {List,Spin,Avatar,Popconfirm,message} from 'antd'
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

    const loadMore = ()=>{
        HistoryStore.find()
        console.log('loadMore')
    }

    useEffect(()=>{
        return ()=>{
            HistoryStore.reset()
        }
    },[])

    const handleCopy= (value) =>{
        copy(value)
        message.info('链接复制成功')
    }
    // const handleDelete =(picId,index) =>{
    //     // HistoryStore.list.splice(index,1)
    //     HistoryStore.deleteItem(picId)
    // }
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
                        <List.Item key={item.id} actions={[
                                <a key="list-loadmore-edit" onClick={()=>handleCopy(item.attributes.url.attributes.url)}>复制</a>
                            ,
                            // <a key="list-loadmore-more" onClick={()=>handleDelete(item.id,index)} >删除</a>
                        ]}>
                            <List.Item.Meta
                                avatar={
                                    <Img src={item.attributes.url.attributes.url} />
                                }
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
