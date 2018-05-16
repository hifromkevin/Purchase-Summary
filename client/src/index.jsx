import React from 'react';
import ReactDOM from 'react-dom';
import Text from './components/Text.jsx';
import $ from 'jquery';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      testing: 'Test!',
      zip: 94103,
      price: 123.45,
      discount: 1.23,
      productImage: './images/chair.jpg'
    }
  }

  changeAmount(number) {
    return Math.round(number * Math.pow(10,2)) / Math.pow(10,2);
  }

  taxAmount(amount) {
    return this.changeAmount(amount * 0.0925);
  }

  totalAmount() {
    var discountedPrice = this.state.price - this.state.discount;
    console.log(this.taxAmount(discountedPrice));
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
      {console.log(this.state)}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-8 pos-border">
            <h2 className="title-height">Purchase Summary</h2>
            <div className="row">
              <div className="col-8">Subtotal</div>
              <div className="col-4 text-right totals">${this.state.price}</div>
            </div>
            <div className="row">
              <div className="col-8"><a href="#" onClick={() => console.log('hi')}  tooltip="simple tooltip here">Pick-Up Savings</a></div>
              <div className="col-4 text-right savings totals">-${this.state.discount}</div>
            </div>
            <div className="row">
              <div className="col-8">Est. Tax and Fees<br />(Based on {this.state.zip})</div>
              <div className="col-4 text-right totals">${this.taxAmount(this.state.price)}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-8"><h4 className="title-height">Est. Total</h4></div>
              <div className="col-4 text-right totals"><h4>${this.totalAmount()}</h4></div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="#" className="testing" onClick={() => this.detailsPlusClick()} >
                  See Item Details 
                  <div className="details-plus">
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="row description hideme">
              <div className="col-5">
                <img src={this.state.productImage} alt="Product Image" width="100%" />
              </div>
              <div className="col-7">
                <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
              </div>
            </div>

            <hr />
            <div className="row">
              <div className="col-12">
                <a href="#"  onClick={() => this.promoPlusClick()} >
                  <span className="apply">Apply Promo Code</span>
                  <div className="promo-plus">
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="row promos hideme">
              <div className="col-12">
                <input /> <button className="btn btn-outline-dark">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <p><Text testing={this.state} /></p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));