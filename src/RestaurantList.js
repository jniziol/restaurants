import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant'

export default function RestaurantList(props) {
  return (
    <div className="restaurantList">
      {
        props.restaurants.map(restElement => (
          <Restaurant addNewReview={props.addNewReview} changeRating={props.changeRating} restaurantProp={restElement}/>
        ))
      }
    </div>
  );
}

