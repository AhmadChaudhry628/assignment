import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddProductDrawer from './AddProductDrawer';

const { Sider } = Layout;
const { SubMenu } = Menu;
function SideBar(props) {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <AddProductDrawer visible={visible} setVisible={setVisible} />
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultOpenKeys={['product']}
                    style={{ height: '100%' }}
                >
                    <SubMenu key="product" title="Products">
                        <Menu.Item onClick={() => setVisible(true)} icon={<PlusOutlined />} key="1">Add Product</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    );
}

export default SideBar;