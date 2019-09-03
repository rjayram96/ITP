import React from 'react'

import './../static/main.css';


const Category = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top images"/>
            </div>

            <div className="card-body text-dark">
                <h4 className="card-title"> {props.title}</h4>

                <a href="#" className="btn btn-outline-success">More details</a>
            </div>
        </div>
    );
}




export default Category;