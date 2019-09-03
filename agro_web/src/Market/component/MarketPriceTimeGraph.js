import React, {Component} from 'react'
import {Chart} from "react-charts";

//import '../static/Market.css'

export class MarketPriceTimeGraph extends Component {

    render() {

        return (

            <div className='container-fluid'>
                <div className="row">
                    <div className="col-10 text-center text-info" style={{marginTop: '10vh'}}>
                        <h1>Carrot price</h1>
                    </div>
                    <div className="col-2" style={{marginTop: '10vh'}}>
                        <div style={{color: "blue"}}>- Market 1</div>
                        <div style={{color: "red"}}>- Market 2</div>
                        <div style={{color: "green"}}>- Market 3</div>
                    </div>
                    <div
                        style={{
                            width: "90%",
                            height: "400px",
                            marginTop: "40px",
                            marginLeft: "60px"
                        }}>
                        <div style={{color: "green"}}>Date</div>
                        <Chart
                            data={[
                                {
                                    label: "Series 1",
                                    data: [[1, 160], [2, 150], [3, 160], [4, 180], [5, 140], [6, 130], [7, 135], [8, 170], [9, 175], [10, 160], [11, 150]]
                                },
                                {
                                    label: "Series 2",
                                    data: [[1, 130], [2, 140], [3, 180], [4, 140], [5, 130], [6, 135], [7, 170], [8, 175], [9, 160], [10, 150], [11, 130]]
                                },
                                {
                                    label: "Series 3",
                                    data: [[1, 150], [2, 160], [3, 150], [4, 130], [5, 120], [6, 155], [7, 170], [8, 185], [9, 150], [10, 140], [11, 160]]
                                }
                            ]}
                            axes={[
                                {primary: true, type: "linear", position: "bottom"},
                                {type: "linear", position: "left"}
                            ]}
                        />
                        <div className="col-12 text-right text-info">Price</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MarketPriceTimeGraph

