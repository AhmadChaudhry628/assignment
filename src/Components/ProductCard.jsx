import React from 'react';
import { Card, Avatar } from 'antd';
import moment from 'moment';
const { Meta } = Card;
function ProductCard({ product }) {
    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={product?.name || "Card Name"}
                description={
                    <>
                        <p>Description: {product?.description || 'No Description'}</p>
                        <p>Price: {product?.price || '0'}</p>
                        <p>Inventory Date:{product?.inventoryDate ? moment(product?.inventoryDate).format('DD-MM-YYYY') : 'No Description'}</p>

                    </>
                }
            />
        </Card>
    );
}

export default ProductCard;