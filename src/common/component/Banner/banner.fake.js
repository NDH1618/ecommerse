import React from "react";
import 'Banner.css'
import banner1 from '../../../img/anh2.webp'
import banner2 from '../../../img/anh33.webp'
import banner3 from '../../../img/anh55.webp'

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.bannerarray = [banner1, banner2, banner3] 
        this.changeBanner = null
    }

    changeBannerimg = () => {
        this.setState( prev => {
           const newCounter = (prev.counter + 1) % (this.bannerarray.length)
           return(
            newCounter
           )
        })   
    }
    componentDidMount(){
        this.changeBanner = setInterval(() =>{this.changeBannerimg()}, 2000)
    }

    componentWillUnmount(){
        if(this.changeBanner != null){
            clearInterval(this.changeBanner)
    }}
    render() {
        return(
            <div className="">
                <div className="menu_bar">
                    <div>
                        <a href="#">Home</a>
                        <a href="#">Admin</a>
                        <a href="#">Dich vu</a>
                        <a href="#">Thanh toan</a>
                        <a href="#">Tien Ich</a>
                        <a href="#">Ung dung</a>
                        <a href="#">Qua tang</a>
                    </div>
                    <div>
                        <a href="#">Thong tin tai khoan</a>
                        <a href="#">Dang ky</a>                      
                    </div>   
                </div>
                <div className="img">
                    <img src={this.bannerarray[this.state.counter]}></img>
                </div>
            </div>
        )
    }
}

export default Banner;


