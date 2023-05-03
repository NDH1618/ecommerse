import React from 'react';
import './productRow.css';
import { AiFillAlert, AiFillStar } from "react-icons/ai";

function Rateproduct({ importrate }) {
    const ratedTemplates = [
        <div className="product__rated">
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
        </div>
        ,
        <div className="product__rated">
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
        </div>
        ,
        <div className="product__rated">
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
        </div>
        ,
        <div className="product__rated">
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b> <AiFillStar /></b>
            <b> <AiFillStar /></b>
        </div>
        , <div className="product__rated">
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b> <AiFillStar /></b>
        </div>
        , <div className="product__rated">
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
            <b style={{ color: 'yellowgreen' }}> <AiFillStar /></b>
        </div>
    ];
    console.log(ratedTemplates[importrate]);
    return (
        <>
            {ratedTemplates[importrate]}
        </>
    )
}



class ProductItem extends React.Component {
    render() {
        return (
            <div className='product_ct'>
                <div className='imgproduct'>
                    <img src={this.props.image} ></img>
                </div>
                <div className='product_pro'>
                    <h6>{this.props.productname}</h6>
                    <h6>{this.props.brand}</h6>
                    <h6>Gia : {this.props.price}</h6>
                    <Rateproduct
                        importrate={this.props.rated}
                    />
                </div>


            </div>
        )

    }
}
export default ProductItem;
