 import React, {Component} from 'react'
import './../static/add.css'


export class addProduct extends Component{

    render () {
        return(
            <div className='container-fluid'>
                <div className="row">


                    <div className="column left">
                        <br />
                        <br />
                        <br />

                    </div>



                    <div className="column middle">
                        <div className="container">
                            <br />
                            <h1>Create New Product</h1>
                            <br />


                            <form name="myForm" action="/" onsubmit="return validateForm()" method="post">
                                <div className="form-group">
                                    <label for="name">Product Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter product name" name="name" />
                                </div>

                                <div className="form-group">
                                    <label for="name">Season:</label>
                                    <input type="text" className="form-control" id="steps" placeholder="Enter Season" name="steps" />
                                </div>

                                <div className="form-group">
                                    <label for="name">Major Growing State:</label>
                                    <input type="text" className="form-control" id="steps" placeholder="Enter Major Growing Location" name="name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">About:</label>
                                    <input type="text" className="form-control" id="steps" placeholder="Enter More Details About Product" name="name"/>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="name">Harvesting Time:</label>
                                    <input type="text" className="form-control" id="steps" placeholder="Enter Harvesting Time" name="name"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Category:</label>
                                    <input type="text" className="form-control" id="steps" placeholder="Enter Category" name="name"/>
                                </div>
                                <br />
                                <br />
                                <br />
                                <button type="submit" className="btn btn-outline-primary">Insert</button>
                                <button type="submit" className="btn btn-primary">Update</button>
                                <button type="submit" className="btn btn-primary">Delete</button>
                            </form>



                        </div>
                    </div>

                </div>
            </div>


        )

    }
}

export default addProduct
