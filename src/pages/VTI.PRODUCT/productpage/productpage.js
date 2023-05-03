import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Banner from '../productitem/banner'
import { Container, Row, Col } from 'react-bootstrap'
import ProductItem from '../productitem/productitem'
import Paging from './Pagination/paging'
import productsService from '../../../common/api/productservice'
import Addproductfrom from './Addproductfrom'
import { useNavigate } from 'react-router-dom'
import './productpage.css'

function ProducPage() {

    const [page, setPage] = useState(0)
    const [products, setProducts] = useState([])
    const [totalPages, settotalPages] = useState(0)
    const pageref = React.createRef()

    const [isReady, setReady] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/news')
        } else {
            setReady(true)
        }

    }, [])

    useEffect(() => {
        productsService.getProducts(page, 10)
            .then(Response => {
                const data = Response.data
                const prod = data.content
                setProducts([...prod])
                settotalPages(data.totalPages)
                console.log(prod)
            })
            .catch(error => {
                console.log(error)
            })

    }, [page])

    const handleProductclear = (id) => {
        setProducts(products.filter(item => item.id !== id))
        console.log(id)
    }

    const handlePageChange = (page) => {
        setPage(page - 1)
    }

    const handlePageseach = () => {
        setPage(pageref.current.value)
    }

    return (
        <>
            {
                isReady &&
                <div>
                    <Banner />
                    <Addproductfrom></Addproductfrom>
                    <Row>
                        <Col xl={2} className='silder'>
                            <div></div>
                        </Col>
                        <Col xl={10} className='slinderright'>
                            <h4 className='list_product'>Quản lý danh sách sản phẩm</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>tên sản phẩm</th>
                                        <th>Giá sản phẩm</th>
                                        <th>Sửa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(item => {
                                            return (
                                                <ProductItem
                                                    key={item.id}
                                                    {...item}
                                                    clearproduct={handleProductclear}
                                                ></ProductItem>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <h3 className='pagination_nana'>
                        <Paging onPageClick={handlePageChange} page={page + 1} totalPage={totalPages}></Paging>
                        <div className='seach_input' >
                            <input ref={pageref} placeholder='nhập số trang'></input>
                            <button onClick={handlePageseach}>Tìm kiếm</button>
                        </div>
                    </h3>
                </div>
            }
        </>

    )
}
export default ProducPage