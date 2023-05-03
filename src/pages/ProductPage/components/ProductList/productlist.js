import React from "react";
import axios from "axios";
import ProductItem from "../product/productItem";
import { Row } from "react-bootstrap";
import { Col, Container } from "react-bootstrap";
import productsService from "../../../../common/api/productservice";
import Paging from "../../../../common/component/Pagination/paging";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            page: 0,
            totalPages: 0,

        }

    }
    fetchProduct(){
        productsService.getProducts(this.state.page, 10)
        .then(response => {
            const data = response.data;
            const products = data.content;
            this.setState({
                products: [...products],
                totalPages: data.totalPages
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.fetchProduct()

    }

    handlePageChange(pageClicked){
        this.setState({
            page: pageClicked -1
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.page !== prevState.page){
            this.fetchProduct();
        }
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.products.map(item => {
                            return (
                                <Col sm={6} md={4} lg={3} xl={3} xs={12} >
                                    <ProductItem
                                        key={item.id}
                                        id={item.id}
                                        image={item.image}
                                        productname={item.productName}
                                        brand={item.brand}
                                        price={item.price}
                                        rated={item.rated}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Paging onPageClick={this.handlePageChange.bind(this)}  page={this.state.page + 1} totalPage={this.state.totalPages}></Paging>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default ProductList;
