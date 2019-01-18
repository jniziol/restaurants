import React, { Component } from 'react';

class Restaurant extends Component {

  render() {
    return(
      <div className="restaurant">
        <img src={this.props.image}></img>
        <div className="info">
          <div><span>Name:</span> {this.props.name}</div>
          <div><span>Rating:</span> {this.props.rating}</div>
          <a href="#">Reviews</a>
          <span onClick={()=> this.props.increaseRating(this.props.name)}>+</span>
          <span onClick={() => this.props.decreaseRating(this.props.name)}>-</span>
        </div>
      </div>
    )
  }
}


export default Restaurant