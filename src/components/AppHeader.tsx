import { Layout } from "antd";
import { type FC } from "react";



const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 90,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

export const AppHeader:FC = () => {

   
    return (
        <Layout.Header style={headerStyle}>
        
        </Layout.Header>
    )
}