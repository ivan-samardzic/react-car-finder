import React, { Component } from 'react'
import Car from './Car'


class Cars extends Component {
    render() {
        const {cars, deleteCar} = this.props;
        return(
            <div>
                {cars.map(car=>
                    <Car car={car} deleteCar={this.props.deleteCar}/>    
                )
                }
            </div>
        )
    }
}

export default Cars
