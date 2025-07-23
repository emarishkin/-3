import { Card, Layout, List, Spin, Statistic, Tag, Typography } from "antd";
import {  useEffect, useState, type FC } from "react";
import type { CryptoAsset, CryptoData } from "../types/types";
import { cryptoAssets, cryptoData } from "../data/data";
import {ArrowDownOutlined, ArrowUpOutlined,LoadingOutlined} from '@ant-design/icons';

const siderStyle: React.CSSProperties = {
  padding: '16px',
  backgroundColor: '#1677ff',
  overflowY: 'auto',
  height: '100vh',
};

interface NewElements extends CryptoAsset{
  totalAmound:number,
  grow: boolean,
  totalProfit:number,
  coinPrice:number,
  growPercent:number
}

export const AppSider: FC = () => {

  const [crypto,setCrypto] = useState<CryptoData | null>(null)
  const [assets,setAssets] = useState<NewElements[]>([])

  const [loading,setLoading] = useState<boolean>(false)
  
  useEffect(()=>{
    async function preload(){
          setLoading(true)
      const timer = setTimeout(()=>{
          setCrypto(cryptoData) 
          setAssets(cryptoAssets.map(asset=>{
            const coin = cryptoData.result.find(c=>c.id === asset.id)
            
            if(!coin){
              return {
                ...asset,
                totalAmound:0,
                grow: false,
                totalProfit:0,
                coinPrice:0,
                growPercent:0
              }
            }

            return{
              totalAmound: coin?.price * asset.amount,
              grow: asset.price < coin.price,
              coinPrice:coin.price,
              totalProfit:asset.amount * coin.price - asset.amount * asset.price,
              growPercent:(((coin.price - asset.price) / asset.price) * 100),
              ...asset
            }
            
          }))
          setLoading(false)
      },2000)
      return ()=>clearTimeout(timer)
      
    }
    preload()
  },[])
  
  if(loading){
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 170 }} spin />}  fullscreen/>
  }

  return (
    <Layout.Sider width="25%" style={siderStyle}>
       {assets.map(asset=>(
        <Card key={asset.id}>
          <Typography.Title>{asset.id}</Typography.Title>
          <Statistic
          title={asset.id}
          value={asset.totalProfit}
          precision={2}
          valueStyle={{ color: asset.grow ? '#3f8600' : '#fa0303ff' }}
          prefix={asset.grow ?  <ArrowUpOutlined /> : <ArrowDownOutlined />}
          suffix="$"
          />
          <List
            dataSource={[
              {title:'Кол-во монет в портфеле: ',value:asset.amount,isCount:true},
              {title:'Профит: ',value:asset.totalProfit,isTag:true},
              {title:'Текущая цена: ',value:asset.coinPrice},
            ]}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text>
                  <span>{item.title}</span>
                  {item.isCount ? (
                    <span>{item.value} шт</span>
                  ) : (
                    <span>{item.value.toFixed(2)}$</span>
                  )}
                  {item.isTag && 
                  <div>
                     <Tag color={asset.grow ? 'green': 'red'}>{asset.growPercent.toFixed(0)}%</Tag>  
                  </div>}
                  
                </Typography.Text>
              </List.Item>
            )}
          />
        </Card>
       ))}
    </Layout.Sider>
  );
};