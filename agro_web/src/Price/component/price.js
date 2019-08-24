import React, {Component} from 'react'

import './../static/priceCss.css';


const price = props => {
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
                <a href="#" className="btn btn-outline-success">Go Anyware</a>
            </div>
        </div>
    );
}




export default price;