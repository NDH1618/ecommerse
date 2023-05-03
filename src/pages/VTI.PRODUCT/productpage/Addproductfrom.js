import './productitem.css';
import { useState } from 'react';
import axios from 'axios';

function Addproductfrom() {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productRated, setProductRated] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productid, setProductid] = useState('');

    const products = {"productName": productName, "brand": productBrand, "rated": productRated, "price": productPrice, "image": productImage }

    const getHeaderConfig = {
            headers: {
                token: localStorage.getItem('token'),
            }
        }

    const handleSubmit = () => {
        console.log(products)
        console.log(getHeaderConfig)
        axios.post('http://vti-ecommerce.foxcode.site/api/admin/v1/products', products, getHeaderConfig)
        .then(response => {
            console.log(response)
            alert('thêm sản phảm thành công')
        })
        .catch(err => {
            console.log(err)
            alert('có lỗi rồi')
        
        })

    }
    
    return (
        <>
            <div className='addproductfrom'>
                <div>
                    <div>
                        <p>Điền tên sản phẩm</p>
                        <input type="text" value={productName} onChange={(a) => setProductName(a.target.value)} />
                    </div>
                    <div>
                        <p>Hãng</p>
                        <input type="text" value={productBrand} onChange={(c) => setProductBrand(c.target.value)} />
                    </div>
                    <div>
                        <p>Giá sản phẩm</p>
                        <input type="text" value={productPrice} onChange={(b) => setProductPrice(b.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Hình ảnh sản phẩm</p>
                        <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                    </div>
                    <div>
                        <p>Rate</p>
                        <input type="text" value={productRated} onChange={(d) => setProductRated(d.target.value)} />
                    </div>
                    <div>
                        <p>ID</p>
                        <input type="text" value={productid} onChange={(e) => setProductid(e.target.value)} />
                    </div>
                </div>
            </div>
            <div>
                <button style={{ backgroundColor: 'greenyellow', height: "3rem", marginBottom: 20, borderRadius: 10 }} onClick={handleSubmit}>them san pham vao danh sach</button>
            </div>
        </>

    )
}
export default Addproductfrom;

// console.log(products);

    // const [categories, setCategories] = useState([]);
    // const AddCategory = () => {
    //     const products = {productName,productPrice,productBrand,productRated,productImage}
    //     setCategories([...categories,products]);
    //     // setCategories(prev => prev.push(products) );       
    // }