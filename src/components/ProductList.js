import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  
  state= {
    products:[]
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5"></div>
        <div className="container">
          <div className="row"></div>
        </div>
      </React.Fragment>
    );
  }
}
