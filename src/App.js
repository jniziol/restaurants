import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Restaurant from './Restaurant'



class App extends Component {
  state = { restaurants: [
    {
      name: 'Coal Fired Pizza', 
      cuisine: 'Pizza',
      rating: 4.3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      reviews: []
    },
    {
      name: `Jay's Pan Pizza Place`, 
      cuisine: 'Pizza',
      rating: 4.9,
      image: 'https://www.seriouseats.com/2013/01/20160503-cast-iron-pizza-1500x1125.jpg',
      reviews: []
    },
    {
      name: 'Pizza Telephone Line', 
      cuisine: 'Pizza',
      rating: 3.2,
      image: 'https://slice.seriouseats.com/images/2012/10/20121014-226128-vitos-slice-bad-pizza.jpg',
      reviews: []
    },
    {
      name: 'DonMacs Burgers', 
      cuisine: 'Burgers',
      rating: 3.9,
      image: 'https://cdn.agriland.ie/uploads/2015/08/Big-Mac.png',
      reviews: []
    },
    {
      name: 'Gourmet Burger Joint', 
      cuisine: 'Burgers',
      rating: 4.7,
      image: 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger-1024x666.jpg',
      reviews: []
    },
    {
      name: 'Ketoburgers', 
      cuisine: 'Burgers',
      rating: 2.3,
      image: 'https://d1ecn32hdc5qh0.cloudfront.net/wp-content/uploads/2018/02/burger.jpg',
      reviews: []
    }, 
  ]}


  increaseRating = (name) => {
    this.setState((previousState) => ({
      restaurants: previousState.restaurants.map((restaurant) => {
        if(restaurant.name === name) {
          return Object.assign(restaurant, {rating: restaurant.rating + 1});
        } else {
          return restaurant;
        }
      })
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Pizza</h2>
        <div className="restaurants">
        {this.state.restaurants.filter( restaurant => 
          restaurant.cuisine === 'Pizza'
        ).map( restaurant => 
          <Restaurant increaseRating={this.increaseRating} key={restaurant.name} name={restaurant.name} image={restaurant.image} rating={restaurant.rating}/>
        )}
        </div>
        <h2>Burgers</h2>
        <div className="restaurants">
        {this.state.restaurants.filter( restaurant => 
          restaurant.cuisine === 'Burgers'
        ).map( restaurant => 
          <Restaurant key={restaurant.name} name={restaurant.name} image={restaurant.image} rating={restaurant.rating}/>
        )}
        </div>
      
      </div>
    );
  }
}

export default App;
