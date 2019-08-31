import React, {Component} from 'react'
import {browserHistory} from "react-router";

import './../static/Market.css'
import image1 from './../static/img/image1.png'

import history from '../../history';

export class ListMarket extends Component{

    render () {
        return(
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-10">
                        <div className="search-container" >
                            <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button class="button buttonBlue" onClick={this.clickbutton.bind(this)}>Create New</button>
                    </div>
                </div>

                  <div className="card newcard">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="card-body">Market name</div>
                          </div>
                          <div className="col-md-2">
                              <button class="button buttonGreen">View</button>
                          </div>
                          <div className="col-md-2">
                              <button class="button buttonBlue">Edit</button>
                          </div>
                          <div className="col-md-2">
                              <button class="button buttonRed">Delete</button>
                          </div>
                      </div>

                  </div>
                  <div className="card newcard">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card-body">Market name</div>
                            </div>
                            <div className="col-md-2">
                                <button class="button buttonGreen">View</button>
                            </div>
                            <div className="col-md-2">
                                <button class="button buttonBlue">Edit</button>
                            </div>
                            <div className="col-md-2">
                                <button class="button buttonRed">Delete</button>
                            </div>
                        </div>

                    </div>
                    <div className="card newcard">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="card-body">Market name</div>
                              </div>
                              <div className="col-md-2">
                                  <button class="button buttonGreen">View</button>
                              </div>
                              <div className="col-md-2">
                                  <button class="button buttonBlue">Edit</button>
                              </div>
                              <div className="col-md-2">
                                  <button class="button buttonRed">Delete</button>
                              </div>
                          </div>

                      </div>
                      <div className="card newcard">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card-body">Market name</div>
                                </div>
                                <div className="col-md-2">
                                    <button class="button buttonGreen">View</button>
                                </div>
                                <div className="col-md-2">
                                    <button class="button buttonBlue">Edit</button>
                                </div>
                                <div className="col-md-2">
                                    <button class="button buttonRed">Delete</button>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <img src={image1} style={{width:100, height:100}} />
                        </div>


                  <br />
            </div>
        )
    }

    clickbutton(){
        history.push('/price')
    }

}

export default ListMarket