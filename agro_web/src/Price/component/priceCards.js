import React, {Component} from 'react'
import Price from './price';
import img1 from './../img/tomato.jpg';
import img2 from './../img/carrot.jpg';
import img3 from './../img/images.jpeg';
export default class priceCards extends Component{

    render () {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Price imgsrc={img1} title="Onion"/>
                    </div>
                    <div className="col-md-4">
                        <Price imgsrc={img2} title="Tomato"/>

                    </div>
                    <div className="col-md-4">
                        <Price imgsrc={img3} title="Bell pepper"/>

                    </div>

                </div>
            </div>

        )
    }

}

