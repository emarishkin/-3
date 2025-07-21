import type { FC } from "react";
import { Layout } from 'antd';

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
  height: 70,
};

export const AppFooter:FC = () => {
    return (
        <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
    )
}