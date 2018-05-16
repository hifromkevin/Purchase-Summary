import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CostOfItem from './components/CostOfItem.jsx';
import ItemDetails from './components/ItemDetails.jsx';
import PromoCode from './components/PromoCode.jsx';
import $ from 'jquery';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      originalPrice: 102.96,
      price: 99.11,
      discount: 3.85,
      zip: 94103,
      quantity: 1,
      productImage: './images/chair.jpg'
    }
    this.changeAmount = this.changeAmount.bind(this);
    this.taxAmount = this.taxAmount.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
    this.detailsPlusClick = this.detailsPlusClick.bind(this);
    this.promoPlusClick = this.promoPlusClick.bind(this);
  }

  changeAmount(number) {
    return Math.round(number * Math.pow(10,2)) / Math.pow(10,2);
  }

  taxAmount(amount) {
    return this.changeAmount(amount * 0.0925);
  }

  totalAmount(price, discount) {
    var discountedPrice = price - discount;
    return this.changeAmount((discountedPrice) + this.taxAmount(discountedPrice));
  }

  detailsPlusClick() {
    $('.description').toggleClass('hideme');
    $('.details-plus span:nth-child(2)').toggleClass('hideme');
  }

  promoPlusClick() {
    $('.promos').toggleClass('hideme');
    $('.promo-plus span:nth-child(2)').toggleClass('hideme');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-8 pos-border">
            <h2 className="title-height">Purchase Summary</h2>
            <CostOfItem costs={this.state} taxAmount={this.taxAmount} totalAmount={this.totalAmount} changeAmount={this.changeAmount}  />
            <ItemDetails productInfo={this.state} detailsPlusClick={this.detailsPlusClick} />
            <hr />
            <PromoCode promoPlusClick={this.promoPlusClick} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));