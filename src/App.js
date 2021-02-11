import './App.css';
import Cars from './components/Cars'
import React, { Component } from 'react';
import Navbar from './components/Navbar'
import AddCar from './components/AddCar'

class App extends Component {
  state = {
    cars: [
      {
        name: 'Kia Ceed',
        year: '2016',
        color: 'white',
        engine: '1.6 CRDI',
        id: 1,
        image: 'https://www.njuskalo.hr/image-w920x690/auti/kia-ceed-1.6-crdi-bt-temp-park-senz-slika-143172167.jpg'
      },
      {
        name: 'Kia Ceed',
        year: '2015',
        color: 'darkgrey',
        engine: '1.4 CRDI',
        id: 2,
        image: 'https://www.njuskalo.hr/image-w920x690/auti/kia-ceed-sw-1.4-crdi-parking-senzori-tvornicka-garancija-slika-144522502.jpg'
      },
      {
        name: 'Kia Ceed',
        year: '2018',
        color: 'red',
        engine: '1.0 CRDI',
        id: 3,
        image: 'https://www.njuskalo.hr/image-w920x690/auti/kia-ceed-1.0-t-gdi-kamera-navi-senzori-slika-144007698.jpg'
      }
    ]
  }
    onSubmit = (car) => {
      car.id = Math.random();
      let cars = [...this.state.cars, car];
      this.setState({cars:cars}); 
    }

    deleteCar = (id) =>{
      let cars = this.state.cars.filter(car => {
        return car.id !== id;
      });
      this.setState({cars : cars});
    }
  
    filterCar = (name) => {
      let cars = this.state.cars.filter(car => {
        return car.name === name;
      });
      this.setState({cars:cars});
    }
    render(){
      const {cars} = this.state;
      return (
        <div>
          <Navbar filterCar={this.filterCar}/> 
          <Cars cars={cars} deleteCar={this.deleteCar} />
          <AddCar onSubmit={this.onSubmit} />
        </div>
      );
    }
}

export default App;
