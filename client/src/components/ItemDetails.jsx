import React from 'react';

const ItemDetails = ({productInfo, detailsPlusClick}) => (
  <div>
    <div className="row">
      <div className="col-12">
        <a href="#" className="testing" onClick={() => detailsPlusClick()} >
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
        <img src={productInfo.productImage} alt="Product Image" width="100%" />
      </div>
      <div className="col-7">
        <div className="row">
          <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row"><p className="bold-text">${productInfo.price}</p></div>
            <div className="row"><p className="old-price bold-text">${productInfo.originalPrice}</p></div>
          </div>
          <div className="col-6">Qty: {productInfo.quantity}</div>
        </div>
      </div>
    </div>
  </div>
);

export default ItemDetails;