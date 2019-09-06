import React, {Component} from 'react'
import Price from './pricesSingleCard';
import img1 from './../img/tomato.jpg';
import img2 from './../img/carrot.jpg';
import img3 from './../img/images.jpeg';

import "./../static/priceCardCss.css"



export default class priceCards extends Component{

    render () {
        return(


        <div className="container-fluid d-flex justify-content-center">


          <div className="row">



              <div className="col-md-9">



                  <div className="row">
                         <div className="col-md-3">
                                <Price  title="Onion"/>
                         </div>

                         <div className="col-md-3">
                                 <Price  title="Tomato"/>
                         </div>

                         <div className="col-md-3">
                                 <Price  title="Bell pepper"/>
                         </div>

                         <div className="col-md-3">
                                 <Price  title="Bell pepper"/>
                         </div>


                         <div className="col-md-3">
                                 <Price  title="Bell pepper"/>
                         </div>

                         <div className="col-md-3">
                                  <Price  title="Bell pepper"/>
                         </div>

                        <div className="col-md-3">
                                     <Price  title="Bell pepper"/>
                          </div>

                          <div className="col-md-3">
                                  <Price  title="Bell pepper"/>
                         </div>
                </div>
              </div>
              <div className="col-md-3">
                  <div>
                      <form>
                          <div className="form-group">

                              <div className="jumbotron">
                                  <h5>Comments</h5>
                                  <p>Bootstrap is the most popular</p>
                                  <button type="button" className=" btn-block btn-outline-success">Delete</button>

                                  <p>Bootstrap is the most popular</p>
                                  <button type="button" className=" btn-block btn-outline-success">Delete</button>
                                  <hr/>
                              </div>

                              <label htmlFor="comment">Comment:</label>
                              <textarea className="form-control" rows="5" id="comment"/><br/>
                              <button type="button" className=" btn-block btn-outline-success">Comment</button>


                          </div>
                      </form>
                  </div>


              </div>

          </div>
        </div>


        )
    }

}

