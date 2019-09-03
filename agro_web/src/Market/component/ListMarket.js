import React, {Component} from 'react'

import './../static/Market.css'

import history from '../../history';
import Header from "../../Price/component/header";
import Footer from "../../Price/component/footer";
import ListMarketSingleCard from "./ListMarketSingleCard";
import {MDBTable, MDBTableBody, MDBTableHead} from "mdbreact";
import Modal from "react-awesome-modal";
import axios from "axios";
import {fetchMarkets} from "./../action";

export class ListMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            marketName: '',
            marketPlace: '',

            markets : [
                {
                    marketName : '',
                    marketPlace : ''
                },
                {
                    marketName : '',
                    marketPlace : ''
                },
                {
                    marketName : '',
                    marketPlace : ''
                },
                {
                    marketName : '',
                    marketPlace : ''
                },
                {
                    marketName : '',
                    marketPlace : ''
                }

            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
//        (fetchMarkets(null));
        axios({
            method: 'get',
            url: 'http://192.168.43.91:8079/api/v1/3d/service/markets',
        })
            .then((response) =>  {
//                alert('success: ' + response);
                this.setState({markets:JSON.parse(JSON.stringify(response.data._embedded.market))})


            })
            .catch(function (error) {
                alert('error: ' + error);
            });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const market = {
            marketName: this.state.marketName,
            marketPlace: this.state.marketPlace
        };

        axios({
            method: 'post',
            url: 'http://192.168.43.91:8079/api/v1/3d/service/markets',
            data: market
        })
            .then(function (response) {
                alert('success: ' + response);
            })
            .catch(function (error) {
                alert('error: ' + error);
            });

        this.closeModal();

        event.preventDefault();

    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    displayMarkets = () => {
        let marketArray = []
        for (let i = 0; i < JSON.stringify(this.state.markets.length); i++) {
            marketArray.push(

                           <ListMarketSingleCard marketName={JSON.stringify(this.state.markets[i].marketName)}
                                        marketPlace={JSON.stringify(this.state.markets[i].marketPlace)}/>

                 )

        }
        return marketArray
      }

    render() {
        // let {markets = this.props.marketReducer};

        return (
            <div className='container-fluid' style={{paddingLeft: 0}}>

                <div className="row">
                    <div className="col-md-10">
                        <div className="search-container">
                            <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button class="button buttonBlue" onClick={() => this.openModal()}>Create New</button>
                    </div>
                </div>
                <div className="row" style={{paddingTop: 20, marginLeft:20}}>


                      {this.displayMarkets()}


                </div>

                <div className="row">
                    <Header/>
                    <Footer/>
                </div>


                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp"
                       onClickAway={() => this.closeModal()}>
                    <div>

                        <h1 className="text-center text-info">Create market</h1>

                        <form className="createForm" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Example label</label>
                                <input type="text" className="form-control" placeholder="Enter market name"
                                       name="marketName" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Another label</label>
                                <input type="text" className="form-control" placeholder="Market place"
                                       name="marketPlace" onChange={this.handleChange}/>
                            </div>
                            <div className="wrapper">
                                <button className="btn btn-outline-success align-middle"
                                        onSubmit={this.handleSubmit}>Create market
                                </button>
                            </div>
                        </form>

                    </div>
                </Modal>
            </div>
        )
    }

    // createMarket(){
    //     const market = {
    //         marketName : this.state.marketName,
    //         marketPlace : this.state.marketPlace
    //     };
    //
    //     axios.get('http://192.168.43.91:8079/api/v1/3d/service/markets')
    //         .then(res => {
    //             alert('An essay was submitted: ' + res);
    //         })
    //
    // }

}

export default ListMarket
