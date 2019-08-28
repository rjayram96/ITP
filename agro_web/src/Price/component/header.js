
import React from 'react';
import '../static/headerCss.css';
import imglogo from './../img/agro.png';


class Header extends React.Component{
    render() {
        return(
            <div className="navbar">
               <img src={imglogo} className="logoimg"/>
               <a href="#home">Home</a>
                <a href="#news">Categories</a>
                <a href="#contact">Division</a>
                <a href="#contact">Farmer Guide</a>
                <a href="#news">Cost Guide</a>

                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"/></button>

            </div>

        );
    }

}
export default Header


