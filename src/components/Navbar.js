import React, { Component } from 'react'

class Navbar extends Component {
    state = {
        name: ""
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.id] : event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name);
        this.props.filterCar(this.state.name);
    }


    render() {
        return (
            <div style={{height : "100px"}} className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-center justify-content-around">
                <h3 style={{fontSize : "32px"}} className="text-center text-success">Car Finder</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group d-flex flex-row align-items-center justify-content-around">
                        <label htmlFor="name"></label>
                        <input id="name" onChange={this.onChange} type="text" className="form-control mx-2" placeholder="Enter car name..." />
                        <button type="submit" className="btn btn-success my-2">Submit</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Navbar
