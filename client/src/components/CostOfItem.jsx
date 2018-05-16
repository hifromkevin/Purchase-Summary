import React from 'react';

const CostOfItem = ({costs, taxAmount, totalAmount, changeAmount}) => (
  <div>
  {console.log(totalAmount(costs.price, costs.discount))}

    <div className="row">
      <div className="col-8">Subtotal</div>
      <div className="col-4 text-right totals">${costs.price}</div>
    </div>
    <div className="row">
      <div className="col-8"><a href="#" onClick={() => console.log('hi')}  tooltip="simple tooltip here">Pick-Up Savings</a></div>
      <div className="col-4 text-right savings totals">-${costs.discount}</div>
    </div>
    <div className="row">
      <div className="col-8">Est. Tax and Fees<br />(Based on {costs.zip})</div>
      <div className="col-4 text-right totals">${taxAmount(costs.price)}</div>
    </div>
    <hr />
    <div className="row">
      <div className="col-8"><h4 className="title-height">Est. Total</h4></div>
      <div className="col-4 text-right totals"><h4>${totalAmount(costs.price, costs.discount)}</h4></div>
    </div>
  </div>
);

export default CostOfItem;