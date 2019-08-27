import React, {Component} from 'react';

import PriceContent from './priceCards';
import Header from './header';
import Footer from './footer';



class mainPrice extends Component{
    render() {
        return(
            <div className="mainPrice">

                <PriceContent/>

                <Header/>
                <Footer/>
            </div>
        )
    }

}
export default mainPrice