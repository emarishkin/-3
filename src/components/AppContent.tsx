import type { FC } from "react";
import { Layout } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 1, 
  padding: 24,
  color: '#fff',
  backgroundColor: '#0958d9',
};
export const AppContent:FC = () => {
    return(
        <Layout.Content style={contentStyle}>
        
        </Layout.Content>
    )
}