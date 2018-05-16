import React from 'react';

const PromoCode = ({promoPlusClick}) => (
  <div>
    <div className="row">
      <div className="col-12">
        <a href="#"  onClick={() => promoPlusClick()} >
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
);

export default PromoCode;