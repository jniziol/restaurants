import React from 'react';

export default function Restaurant(props) {
  return(
    <div className="restaurant">
      <img src={props.restaurantProp.image}></img>
      <div className="info">
        <div><span>Name:</span> {props.restaurantProp.name}</div>
        <div><span>Rating:</span> {props.restaurantProp.rating}</div>
        <span onClick={() => {props.changeRating(props.restaurantProp, -1)}}>-</span>
        <span onClick={() => {props.changeRating(props.restaurantProp, 1)}}>+</span>
      </div>
    </div>
  )
}
