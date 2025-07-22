import { useEffect, useState, type FC } from "react";

import { Button, Drawer, Flex, Image, Layout, Modal, Select, Space } from 'antd';
import { fetchCryptoApi } from "../Api";
import type { CryptoData } from "../types/types";
import { CoinInfoModal } from "./CoinInfoModal";

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

    const [coin,setCoin] = useState<any>('')
  
    const [loading,setLoading] = useState<boolean>(false)
    const [open,setOpen] = useState<boolean>(false)
    
    const [drawer,setDrawer] = useState<boolean>(false)

    useEffect(()=>{
      async function preload(){
        const crypto = await fetchCryptoApi() as CryptoData
        setCrypto(crypto)
      } 
       preload();
    },[])
    
    const handleSelect = (value:string) => {
      const coin = crypto?.result.find(c=>c.id === value)
      setLoading(true)
      setCoin(coin)
      setOpen(true)
       setTimeout(() => {
      setLoading(false);
    }, 2000);
    }

    const handleClickDrrawer = () => {
      setDrawer(prev=>!prev)
    }

    return (
        <Layout.Header style={headerStyle}>
          <Flex>
             <Select
                open={select}
                value='press/to open'
                style={{ width: '15%' }}
                onClick={()=>setSelect(prev=>!prev)}
                onSelect={handleSelect}
                options={crypto?.result.map(coin=>(
                  {
                    label:coin.name,
                    value:coin.id,
                    icon:coin.icon,
                  }
                ))}
                optionRender={(option) => (
                  <Space>
                    <Image src={option.data.icon} width={20} alt={option.data.value} />
                    <span>{option.data.label}</span>
                  </Space>
                )}
              />

              <Button onClick={handleClickDrrawer}  >
                Добавить монету в портфель
              </Button>

          </Flex>

          <Modal
            footer={null}
            loading={loading}
            open={open}
            onCancel={() => setOpen(false)}
          >
            <CoinInfoModal coin={coin} />
          </Modal>

          <Drawer
            title="Форма добавления монеты"
            onClose={()=>setDrawer(false)}
            open={drawer}
          >
              
          </Drawer>

        </Layout.Header>
    )
}