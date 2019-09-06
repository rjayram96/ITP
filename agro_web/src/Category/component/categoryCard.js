import React, {Component} from 'react'
import img1 from './../img/onion.jpg';
import img2 from './../img/tomato.jpg';
import img3 from './../img/capsicum.jpg';
import img4 from './../img/carrot.jpg';
import img5 from './../img/bittermelon.jpg';
import img6 from './../img/okra.jpg';
import img7 from './../img/pumpkin.jpg';
import img8 from './../img/potatoe.jpg';
import img9 from './../img/cruciferous.jpg';
import Header from './header';
import Footer from './footer';

import Category from './categorySingleCard';
export default class categoryCard extends Component{

    render () {


        return(
             <div className="container-fluid">
                 <h2>Vegetables</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <Category imgsrc={img1} title="Onion"/>
                        </div>
                        <div className="col-md-4">
                            <Category imgsrc={img2} title="Tomato"/>

                        </div>
                        <div className="col-md-4">
                            <Category imgsrc={img3} title="Capsicum"/>

                        </div>
                    </div> <br></br>
                     <div className="row">
                         <div className="col-md-4">
                             <Category imgsrc={img4} title="Carrot"/>
                         </div>
                         <div className="col-md-4">
                             <Category imgsrc={img5} title="Bitter Melon"/>

                         </div>
                         <div className="col-md-4">
                             <Category imgsrc={img6} title="Okra"/>

                          </div>
                    </div><br></br>
                 <div className="row">
                     <div className="col-md-4">
                         <Category imgsrc={img7} title="Pumpkin"/>
                     </div>
                     <div className="col-md-4">
                         <Category imgsrc={img8} title="Potatoes"/>

                     </div>
                     <div className="col-md-4">
                         <Category imgsrc={img9} title="Cruciferous"/>

                     </div>
                 </div>


             </div>
        )
    }

}

