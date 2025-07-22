import { type FC } from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components/AppHeader';
import { AppContent } from './components/AppContent';
import { AppFooter } from './components/AppFooter';
import { AppSider } from './components/AppSider';

const layoutStyle: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
};

const innerLayoutStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

export const App: FC = () => (
  <Layout style={layoutStyle}>
    <AppSider />
    <Layout style={innerLayoutStyle}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  </Layout>
);