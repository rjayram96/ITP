import React, {Component} from 'react'

import './../static/add.css'

import AddProductCard from "./addProductCard";
import Modal from "react-awesome-modal";
import axios from "axios";

export class addProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            ProductName: '',
            Category: '',
            Season:'',
            State:'',
            About:'',

            categories : [
                {
                    ProductName : '',
                    Category : '',
                    Season: '',
                    State: '',
                    About: ''
                },
                {
                    ProductName : '',
                    Category : '',
                    Season: '',
                    State: '',
                    About: ''
                },
                {
                    ProductName : '',
                    Category : '',
                    Season: '',
                    State: '',
                    About: ''
                },
                {
                    ProductName : '',
                    Category : '',
                    Season: '',
                    State: '',
                    About: ''
                },
                {
                    ProductName : '',
                    Category : '',
                    Season: '',
                    State: '',
                    About: ''
                }

            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
//        (fetchMarkets(null));
        axios({
            method: 'get',
            url: 'http://localhost:8079/api/v1/3d/service/categories',
        })
            .then((response) =>  {
//                alert('success: ' + response);
                this.setState({categories:JSON.parse(JSON.stringify(response.data._embedded.category))})
                console.log(JSON.stringify(this.state.categories[0].Category))

            })
            .catch(function (error) {
                alert('error: ' + error);
            });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const category = {
            ProductName: this.state.ProductName,
            Category: this.state.Category,
            Season: this.state.Season,
            State: this.state.State,
            About: this.state.About
        };

        axios({
            method: 'post',
            url: 'http://localhost:8079/api/v1/3d/service/categories',
            data: category
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

    displaycategory = () => {
        let categoryArray = []
        for (let i = 0; i < JSON.stringify(this.state.categories.length); i++) {
            categoryArray.push(

                <AddProductCard ProductName={JSON.stringify(this.state.categories[i].ProductName)}
                                      Category={JSON.stringify(this.state.categories[i].Category)}
                                Season={JSON.stringify(this.state.categories[i].Season)}
                                State={JSON.stringify(this.state.categories[i].State)}
                                About={JSON.stringify(this.state.categories[i].State)}

                />


            )

        }

        console.log(categoryArray)
        return categoryArray
    }

    render() {

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


                    {this.displaycategory()}


                </div>

                <Modal visible={this.state.visible} width="80%" height="80%" effect="fadeInUp"
                       onClickAway={() => this.closeModal()}>
                    <div>

                        <h1 className="text-center text-info">Create category</h1>

                        <form className="createForm" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Product Name</label>
                                <input type="text" className="form-control" placeholder="Enter product name"
                                       name="ProductName" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Category</label>
                                <input type="text" className="form-control" placeholder="Enter Category"
                                       name="Category" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Season</label>
                                <input type="text" className="form-control" placeholder="Enter Season"
                                       name="Season" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Major growing state</label>
                                <input type="text" className="form-control" placeholder="Enter State"
                                       name="State" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">More details about product</label>
                                <input type="text" className="form-control" placeholder="Enter more details"
                                       name="About" onChange={this.handleChange}/>
                            </div>
                            <div className="wrapper">
                                <button className="btn btn-outline-success align-middle"
                                        onSubmit={this.handleSubmit}>Create product
                                </button>
                            </div>
                        </form>

                    </div>
                </Modal>
            </div>
        )
    }

}

export default addProduct
