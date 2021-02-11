import React, { Component } from 'react'
import './Car.css'

const Car = ({car, deleteCar}) => {
    return (
        <div className="car" key={car.id}>
            <div className="car-image">
                <img src={car.image} />
            </div>
            <div className="car-info">
                <div className="car-name">Name {car.name}</div>
                <div className="car-year">Year {car.year}</div>
                <div className="car-color">Color {car.color}</div>
                <div className="car-engine">Engine {car.engine}</div>
            </div>
            <button className="btn btn-light" onClick={() =>{deleteCar(car.id)}}><i className="far fa-trash-alt text-success"></i></button>
        </div>
    )
}

export default Car
