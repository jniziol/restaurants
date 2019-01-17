import React, { Component } from 'react';
import Filter from './Filter'

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <span className="title">Restauranteur</span>
        <Filter />
      </div>
    )
  }
}

export default Header

