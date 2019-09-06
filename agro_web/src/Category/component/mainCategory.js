import React, {Component} from 'react';

import PriceContent from './categoryCard';
import Header from './header';
import Footer from './footer';



class mainCategory extends Component{
    render() {
        return(
            <div className="mainCategory">

                <PriceContent/>

                <Header/>
                <Footer/>
            </div>
        )
    }

}
export default mainCategory