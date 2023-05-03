import { Container, Row, Col } from 'react-bootstrap'
import './product.css'

function ProductItem({id, productName, price, clearproduct}) {
    const handleClear = () => {
        return clearproduct(id)
    }
    return (
        <>
            <tr className='item'>
                <td>{id}</td>
                <td>{productName}</td>
                <td>{price}</td>
                <td><button className='button_click' onClick={handleClear}>xoa SP</button></td>
            </tr>
        </>

    )
}
export default ProductItem;