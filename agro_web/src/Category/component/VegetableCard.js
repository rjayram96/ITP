
import React from 'react';
import '../static/main.css';
import img1 from './../img/onion.jpg';
import img2 from './../img/tomato.jpg';
import img3 from './../img/capsicum.jpg';
import img4 from './../img/carrot.jpg';
import img5 from './../img/bittermelon.jpg';
import img6 from './../img/okra.jpg';
import img7 from './../img/pumpkin.jpg';
import img8 from './../img/potatoe.jpg';
import img9 from './../img/cruciferous.jpg';

import Modal from "react-awesome-modal";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";




class VegetableCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    render() {
        return(
            <div className="container-fluid">
                <h2>Vegetables</h2>
                <div className="row">
                    <div className="col-md-4">
            <div className="card text-center shadow">
                <modal/>
                <div className="overflow">
                    <img src={img1} alt="Image1" className="card-img-top imagesize"/>
                </div>
                <div className="card-body text-dark">

                    <h4 className="card-title">Onion</h4>
                    <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                    <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                        <div>

                            <h1>Onion</h1>

                            <MDBTable hover>
                                <MDBTableHead>
                                    <tr>

                                        <th>Season :- </th>
                                        <th>Major growing state :- </th>
                                        <th>Harvesting time :- </th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>Welllllll</td>
                                        <td>lllllllll</td>
                                        <td>Otto</td>

                                    </tr>
                                    <tr>
                                        <td>ddddddddddd</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>

                                    </tr>
                                    <tr>
                                        <td>Dehiwala</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>

                                    </tr>
                                </MDBTableBody>
                            </MDBTable>

                            <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                        </div>
                    </Modal>
                </div>
            </div>
                    </div>







            <div className="col-md-4">
                <div className="card text-center shadow">
                    <modal/>
                    <div className="overflow">
                        <img src={img2} alt="Image1" className="card-img-top imagesize"/>
                    </div>
                    <div className="card-body text-dark">

                        <h4 className="card-title">Tomato</h4>
                        <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                        <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div>

                                <h1>Market Prices</h1>

                                <MDBTable hover>
                                    <MDBTableHead>
                                        <tr>

                                            <th>MARKETS</th>
                                            <th>BUYING PRICE</th>
                                            <th>SELLING PRICE</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>Wellawaththa</td>
                                            <td>Mark</td>
                                            <td>Otto</td>

                                        </tr>
                                        <tr>
                                            <td>Kollupittiya</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>

                                        </tr>
                                        <tr>
                                            <td>Dehiwala</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>

                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>

                                <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                            </div>
                        </Modal>
                    </div>
                </div>
            </div>

                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img3} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title">Capsicum</h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img4} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title">Carrot</h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img5} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title"></h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img6} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title">Onion</h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img7} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title">Onion</h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img8} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title">Onion</h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center shadow">
                            <modal/>
                            <div className="overflow">
                                <img src={img9} alt="Image1" className="card-img-top imagesize"/>
                            </div>
                            <div className="card-body text-dark">

                                <h4 className="card-title">Onion</h4>
                                <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>More Details</button>


                                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                    <div>

                                        <h1>Market Prices</h1>

                                        <MDBTable hover>
                                            <MDBTableHead>
                                                <tr>

                                                    <th>MARKETS</th>
                                                    <th>BUYING PRICE</th>
                                                    <th>SELLING PRICE</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <td>Wellawaththa</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>

                                                </tr>
                                                <tr>
                                                    <td>Kollupittiya</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>

                                                </tr>
                                                <tr>
                                                    <td>Dehiwala</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>

                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>

                                        <button className="btn btn-outline-success" ><a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a></button>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>


        </div>
        </div>

        );
    }

}
export default VegetableCard