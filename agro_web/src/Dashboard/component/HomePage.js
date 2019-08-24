import React, {Component} from 'react'

export class HomePage extends Component{

    render () {
        return(
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 text-center text-info" style={{marginTop:'50vh'}} >
                        <h3>Hello World</h3>
                    </div>
                    <div className="alert alert-success">
                      <strong>Success!</strong> Indicates a successful or positive action.
                    </div>
                </div>

            </div>
        )
    }

}

export default HomePage