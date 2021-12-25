import { Row, Col } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../Actions/product';
import ProductCard from '../Components/ProductCard';

function ProductLayout(props) {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state?.products)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);
    return (
        <div>
            {products?.length > 0 ? (
                <Row gutter={(16, 16)} justify='space-around' align="middle">
                    {products?.map((item, index) => (
                        <Col key={index} xs={24} sm={24} md={8} lg={6}>
                            <ProductCard product={item} />
                        </Col>
                    ))
                    }
                </Row>
            ) : ('No Products')}
        </div>
    );
}

export default ProductLayout;