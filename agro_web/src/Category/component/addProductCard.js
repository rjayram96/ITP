import React from 'react';

import './../static/add.css'

class addProductCard extends React.Component{
    render() {
        return(

            <div className="card newcard">
                <div className="row">
                    <div className="col">
                        <div className="card-body"><h3>Product Name</h3>{this.props.ProductName}</div>
                    </div>
                    <div className="col">
                        <div className="card-body"><h3>Category</h3>{this.props.Category}</div>
                    </div>
                    <div className="col">
                        <div className="card-body"><h3>Season</h3>{this.props.Season}</div>
                    </div>
                    <div className="col">
                        <div className="card-body"><h3>State</h3>{this.props.State}</div>
                    </div>
                    <div className="col">
                        <div className="card-body"><h3>State</h3>{this.props.About}</div>
                    </div>
                    <div className="col">
                        <button className="button buttonGreen">View</button>
                    </div>
                    <div className="col">
                        <button className="button buttonBlue">Edit</button>
                    </div>
                    <div className="col">
                        <button className="button buttonRed">Delete</button>
                    </div>

                </div>
            </div>


        );
    }

}
export default addProductCard