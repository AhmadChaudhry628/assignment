import React from 'react';
import { Drawer, Row, Col, Form, Input, Button, InputNumber, DatePicker } from 'antd'
import { addProduct } from '../Actions/product';
import { useDispatch } from 'react-redux';
const { TextArea } = Input;
function AddProductDrawer({ visible, setVisible }) {
    const dispatch = useDispatch()
    const onClose = () => {
        setVisible(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(addProduct(values))
        setVisible(false)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Drawer destroyOnClose title="Add Product" placement="right" onClose={onClose} visible={visible}>
            <Form
                name="basic"
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row gutter={(16, 16)} align="middle">
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input product name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Please input product description' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true, message: 'Please input product price' }]}
                        >
                            <InputNumber />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                            label="Inventory Date"
                            name="inventoryDate"
                            rules={[{ required: true, message: 'Please input inventory Date' }]}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer >
    );
}

export default AddProductDrawer;