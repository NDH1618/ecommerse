import React from "react";
import './Banner.css'
import Header from "./header";
import Banner1 from '../../../img/anh2.webp'
import Banner2 from '../../../img/anh33.webp'
import Banner3 from '../../../img/anh55.webp'


class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.banners = [Banner1, Banner2, Banner3];
        this.changeBanner = null
        this.state = {
            counter: 0
        }

    }

    changeBannerimg = () => {
        this.setState(prev =>{
            const newCounter = (prev.counter + 1) % (this.banners.length)
            return {
                ...prev,
                counter: newCounter
            }
        })
        
    }

    componentDidMount(){
        this.changeBanner = setInterval(() => {
        this.changeBannerimg()
        },2000)

    }
    componentWillUnmount(){
        if(this.changeBanner !== null){
            clearInterval(this.changeBanner)
        }

    }

    render() {
        return (
            <div className="">
                <div>
                    <Header />
                </div>              
                <div className="img">
                    <img src={this.banners[this.state.counter]} alt="logo" />
                </div>
            </div>
        )

    }

}
export default Banner;