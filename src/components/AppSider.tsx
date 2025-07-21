import { useEffect, useState, type FC } from "react";
import { SiderCard } from "./SiderCards";
import { Layout, Spin } from "antd";
import {  FetchSiderApi } from "../Api";
import type { ICalcCard } from "../types/ICalcCard";
import { LoadingOutlined } from '@ant-design/icons';



const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};


export const AppSider:FC = () => {
    
    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [cards,setCards] = useState<ICalcCard[]>([])
   
    useEffect(()=>{
      const timer = setTimeout(()=>{
        setInitialLoading(false)
      },1000)
      return ()=>clearTimeout(timer)
    },[])

    useEffect(()=>{
      async function preload(){
        setLoading(true)
        const data = await FetchSiderApi() as ICalcCard[]
       
        setCards(data)
        setLoading(false)
      }
      preload()
    },[initialLoading])

    if (initialLoading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 90 }} spin />} fullscreen />;
  }
    const handleClickCardBTN = (path:string) => {
      console.log(path)
    }
  
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            <SiderCard loading={loading} cards={cards} ClickCalcBTN={handleClickCardBTN} />
        </Layout.Sider>
    )
}