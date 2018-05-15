import React from 'react';
import ReactDOM from 'react-dom';
import Text from './components/Text.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      testing: 'Test!',
      zip: undefined,

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-8 pos-border">
            <h2 className="title-height">Purchase Summary</h2>
            <div className="row">
              <div className="col-8">Subtotal</div>
              <div className="col-4 text-right totals">$123.45</div>
            </div>
            <div className="row">
              <div className="col-8">Pick-Up Savings</div>
              <div className="col-4 text-right savings totals">-$1.23</div>
            </div>
            <div className="row">
              <div className="col-8">Est. Tax and Fees<br />(Based on ZIPCODE)</div>
              <div className="col-4 text-right totals">$8.92</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-8"><h3 className="title-height">Est. Total</h3></div>
              <div className="col-4 text-right totals"><h3>$8.92</h3></div>
            </div>
            <div className="row">
              <div className="col-12">
                See Item Details <div className="plus"><span></span><span></span></div>
              </div>
            </div>

            <hr />
            <div className="row">
               <div className="col-12">Apply Promo Code</div>
            </div>
          </div>
        </div>
        <p><Text testing={this.state} /></p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));