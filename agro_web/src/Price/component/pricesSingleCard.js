import React, {Component} from 'react'

import '../static/priceCardCss.css';




const pricesSingleCard = props => {

    return(
        <div className= "card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top imagesize"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> {props.title}</h4>
                <p className="card-text text-secondary">
                    Basically, JSX is a JavaScript render function that helps you insert your HTML right into your Jav...
                </p>
                <button href="#" className="btn btn-outline-success btn1">Market Price</button>
                <button href="#" className="btn btn-outline-success">Update Price</button>
            </div>

        </div>


    );


};




export default pricesSingleCard;