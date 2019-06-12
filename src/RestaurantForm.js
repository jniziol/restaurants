import React from 'react';

export default class RestaurantForm extends React.Component {
  state = {
    name: "",
    imageUrl: "",
  }

  updateName = (restaurantName) => {
    this.setState({name: restaurantName})
  }

  updateImageUrl = (event) => {
    this.setState({imageUrl: event.target.value})
  }

  submitted = (event) => {
    event.preventDefault();
    this.props.createNewRestaurant(this.state.name, this.state.imageUrl);
    this.setState({name: "", imageUrl: ""});
  }

  render() {
    return (
      <form onSubmit={this.submitted}>
        <input placeholder="Name" value={this.state.name} onChange={(e) => this.updateName(e.target.value)}/>
        <input placeholder="Image URL" value={this.state.imageUrl} onChange={this.updateImageUrl}/>
        <button>Submit</button>
      </form>
    );
  }

}


