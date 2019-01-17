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
        </div>
      </div>
    )
  }
}


export default Restaurant