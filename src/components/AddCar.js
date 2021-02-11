import React, { Component } from 'react'

class AddCar extends Component {
    state = {
        name: "",
        year: "",
        color: "",
        engine: "",
        image: "",
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.id] : event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3 className="bg-light my-5 text-center col-8">Add a new Car</h3>
                <form onSubmit={this.onSubmit} className="form container my-1">
                    <div className="form-group">
                        <label htmlFor="name">Car Name</label>
                        <input id="name" onChange={this.onChange} type="text" className="form-control" placeholder="Enter car name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Car Year</label>
                        <input type="text" onChange={this.onChange} className="form-control" id="year" placeholder="year" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Car Color</label>
                        <input id="color" onChange={this.onChange} type="text" className="form-control" placeholder="Enter car color" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Car Engine</label>
                        <input type="text" onChange={this.onChange} className="form-control" id="engine" placeholder="engine" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Car Image URL</label>
                        <input id="image" onChange={this.onChange} type="text" className="form-control" placeholder="Enter car image URL" />
                    </div>
                    <button type="submit" className="btn btn-success my-2">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCar
