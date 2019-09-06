import React, {Component} from 'react';

import PriceContent from './VegetableCard';
import Header from './header';
import Footer from './footer';



class VegetablePage extends Component{
    render() {
        return(
            <div className="VegetablePage">

                <PriceContent/>

                <Header/>
                <Footer/>
            </div>
        )
    }

}
export default VegetablePage