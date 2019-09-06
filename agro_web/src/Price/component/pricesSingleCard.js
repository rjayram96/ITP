
import React from 'react';
import '../static/priceCardCss.css';
import img3 from './../img/tomato.jpg';

import Modal from "react-awesome-modal";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";




class pricesSingleCard extends React.Component{
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
            <div className= "card text-center shadow">
                <modal/>
                <div className="overflow">
                    <img src={img3} alt="Image1" className="card-img-top imagesize"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title"> Vegetable</h4>

                    <button href="#" className="btn btn-outline-success btn1" onClick={() => this.openModal()}>Market Price</button>
                    <button href="#" className="btn btn-outline-success">Update Price</button>

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
                                        <td>45.76</td>
                                        <td>56.87</td>

                                    </tr>
                                    <tr>
                                        <td>Kollupittiya</td>
                                        <td>56.76</td>
                                        <td>56.78</td>

                                    </tr>
                                    <tr>
                                        <td>Dehiwala</td>
                                        <td>34.67</td>
                                        <td>65.78</td>

                                    </tr>
                                </MDBTableBody>
                            </MDBTable>

                            <button className="btn btn-outline-success"  href="javascript:void(0);" onClick={() => this.closeModal()}>Close</button>
                            <button href="#" className="btn btn-outline-success">Update</button>


                        </div>
                    </Modal>
                </div>

            </div>

        );
    }

}
export default pricesSingleCard