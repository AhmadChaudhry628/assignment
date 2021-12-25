import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import TopNav from '../Components/TopNav';
import SideBar from '../Components/SideBar';
import ProductLayout from '../Layouts/ProductLayout';
const { Content } = Layout;
function Home(props) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <TopNav />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <SideBar />
                    <Content style={{ padding: '0 24px', minHeight: '100vh' }}><ProductLayout /></Content>
                </Layout>
            </Content>
        </Layout>
    );
}

export default Home;