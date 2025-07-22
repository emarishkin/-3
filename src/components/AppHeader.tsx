import { useEffect, useState, type FC } from "react";

import { Flex, Layout, Select, Space } from 'antd';
import { fetchCryptoApi } from "../Api";
import type { CryptoData, NewAsset } from "../types/types";
import { icons } from "antd/es/image/PreviewGroup";

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 90,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

export const AppHeader:FC = () => {

    const [select,setSelect] = useState<boolean>(false)
    const [crypto,setCrypto] = useState<CryptoData | null>(null)


    useEffect(()=>{
      async function preload(){
        const crypto = await fetchCryptoApi() as CryptoData
        setCrypto(crypto)
      } 
       preload();
    },[])
    
    const handleSelect = (value:string) => {
      
    }

    return (
        <Layout.Header style={headerStyle}>
          <Flex>
             <Select
                mode="multiple"
                open={select}
                value='press/to open'
                style={{ width: '100%' }}
                onClick={()=>setSelect(prev=>!prev)}
                onSelect={handleSelect}
                options={crypto?.result.map(coin=>(
                  {
                    coin:coin.name,
                    value:coin.id,
                    icons:coin.icon,
                  }
                ))}
                optionRender={(option) => (
                  <Space>
                    <span role="img" aria-label={option.data.label}>
                      {option.data.emoji}
                    </span>
                    {option.data.desc}
                  </Space>
                )}
              />
          </Flex>
        </Layout.Header>
    )
}