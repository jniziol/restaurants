import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant'

class RestaurantList extends Component {
  state = {
    restaurants: [
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
  ],
  somethingElse: "hi"
}

  changeRating = (restaurant, value) => {
    let index = this.state.restaurants.findIndex(r => r.name === restaurant.name);

    this.setState(currentState => {
      return { restaurants: [
          ...currentState.restaurants.slice(0,index),
          {...currentState.restaurants[index], rating: currentState.restaurants[index].rating + value},
          ...currentState.restaurants.slice(index + 1)
      ]}
    });
  }

  render() {
    return (
      <div className="restaurantList">
        {
          this.state.restaurants.map(restElement => (
            <Restaurant changeRating={this.changeRating} restaurantProp={restElement}/>
          ))
        }
      </div>
    );
  }
}

export default RestaurantList;
