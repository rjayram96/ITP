import React from 'react';

import './../static/Market.css'

class ListMarketSingleCard extends React.Component{
    render() {
        return(

            <div className="card newcard">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card-body">{this.props.marketName}</div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">{this.props.marketPlace}</div>
                    </div>
                    <div className="col-md-1">
                        <button className="button buttonGreen">View</button>
                    </div>
                    <div className="col-md-1">
                        <button className="button buttonBlue">Edit</button>
                    </div>
                    <div className="col-md-1">
                        <button className="button buttonRed">Delete</button>
                    </div>
                </div>
            </div>


        );
    }

}
export default ListMarketSingleCard