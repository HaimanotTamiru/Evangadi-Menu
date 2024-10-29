import React, { Component } from 'react'

 class RestaurantMenu extends Component {
     render() {
      const {  img,  title, price, desc } = this.props.menuData;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className="food-desc">
            {String(desc).substring(0, 250) + "..."}
          </div>
          <div className="readMore">
            <button >Read more</button>
          </div>
        </div>
      </>
    );
  }
}
export default RestaurantMenu;