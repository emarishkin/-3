import { useEffect, useState, type FC } from "react";
import { Card, Divider, Layout, List, Spin, Statistic, Tag } from "antd";
import { type CryptoAsset, type CryptoData } from "../types/types";
import { fetchAssetApi, fetchCryptoApi } from "../Api";
import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons';
import '../utils';
import { capotalaze } from "../utils";

const siderStyle: React.CSSProperties = {
  padding: '16px',
  backgroundColor: '#1677ff',
  overflowY: 'auto',
  height: '100vh',
};

const cardStyle: React.CSSProperties = {
  marginBottom: '12px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
};

const statisticStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize:'20px'
};

const listItemStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 0',
};

const tagStyle: React.CSSProperties = {
  marginLeft: '8px',
  borderRadius: '4px',
};

interface NewAsset extends CryptoAsset {
  grow: boolean;
  currentPrice: number;
  growPercent: string;
  totalAmount: number;
  totalProfit: number;
}

export const AppSider: FC = () => {
  const [crypto, setCrypto] = useState<CryptoData | null>(null);
  const [assets, setAssets] = useState<NewAsset[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    async function preload() {
      setLoading(true);
      try {
        const cryptoData = await fetchCryptoApi() as CryptoData;
        const cryptoAssets = await fetchAssetApi() as CryptoAsset[];
        
        setCrypto(cryptoData);
        setAssets(cryptoAssets.map(cryptoAsset => {
          const coin = cryptoData.result.find(c => c.id === cryptoAsset.id);
          
          if (!coin) {
            return {
              ...cryptoAsset,
              grow: false,
              currentPrice: 0,
              growPercent: '0.00',
              totalAmount: 0,
              totalProfit: 0
            };
          }

          const currentPrice = coin.price;
          const totalAmount = currentPrice * cryptoAsset.amount;
          const totalProfit = totalAmount - (cryptoAsset.price * cryptoAsset.amount);
          const grow = cryptoAsset.price < currentPrice;
          const growPercent = (((currentPrice - cryptoAsset.price) / cryptoAsset.price) * 100).toFixed(2);

          return {
            ...cryptoAsset,
            currentPrice,
            grow,
            growPercent,
            totalAmount,
            totalProfit
          };
        }));
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }
    preload();
  }, []);

  if (loading) {
    return <Spin indicator={<LoadingOutlined style={{ fontSize: 170 }} spin />} fullscreen />;
  }

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map(asset => (
        <Card key={asset.id} style={cardStyle} bodyStyle={{ padding: '12px' }}>
          <div style={{fontSize:20}}>
            <Statistic
              title={capotalaze(asset.id)}
              value={asset.totalProfit}
              precision={2}
              valueStyle={{ 
                color: asset.grow ? '#3f8600' : '#cf1322',
                fontSize: '18px'
              }}
              prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$"
            />
            <Tag 
              color={asset.grow ? 'green' : 'red'} 
              style={tagStyle}
            >
              {asset.growPercent}%
            </Tag>
          </div>
          
          <Divider style={{ margin: '12px 0' }} />
          
          <List
            dataSource={[
              { title: 'Цена покупки:', value: asset.price },
              { title: 'Текущая цена:', value: asset.currentPrice },
              { title: 'Количество:', value: asset.amount },
              { title: 'Общая стоимость:', value: asset.totalAmount },
            ]}
            renderItem={(item) => (
              <List.Item style={listItemStyle}>
                <span style={{ color: '#8c8c8c',fontSize:20 }}>{item.title}</span>
                <span style={{ fontWeight: 500 ,fontSize:20}}>
                  {typeof item.value === 'number' ? item.value.toFixed(2) + '$' : item.value}
                </span>
              </List.Item>
            )}
          />
        </Card>
      ))}
    </Layout.Sider>
  );
};