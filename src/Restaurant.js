import React from 'react';

export default class Restaurant extends React.Component {
  state = {
    review: ""
  }

  updateReview = (e) => {
    this.setState({review: e.target.value})
  }

  newReview = (e) => {
    e.preventDefault();
    this.props.addNewReview(this.props.restaurantProp, this.state.review);
    this.setState({review: ""});
  }

  render() {
    let props = this.props;

    return (
      <div className="restaurant">
        <img src={props.restaurantProp.image}></img>
        <div className="info">
          <div><span>Name:</span> {props.restaurantProp.name}</div>
          <div><span>Rating:</span> {props.restaurantProp.rating}</div>
          <span onClick={() => {props.changeRating(props.restaurantProp, -1)}}>-</span>
          <span onClick={() => {props.changeRating(props.restaurantProp, 1)}}>+</span>
          <form onSubmit={this.newReview}>
            <textarea value={this.state.review} placeholder="Enter your review!" onChange={this.updateReview}/>
            <button>Submit</button>
          </form>
          <div>
            {props.restaurantProp.reviews.map((review) => {
              return <div>{review}</div>
            })}
          </div>
        </div>
      </div>
    )
  }
}
