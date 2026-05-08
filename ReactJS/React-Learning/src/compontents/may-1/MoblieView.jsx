import React, { Component } from "react";
// @ts-ignore
import "./mobileview.css";
import { Link } from "react-router-dom";

class MobileView extends Component {
  render() {
    console.log("props in the mobile", this.props);

    let { mobiles } = this.props;

    let mobile = mobiles.map((value, index) => {
      return (
        
          <div className="main">
            <div className="section-one">
              <img className="mobile-image" src={value.image} alt={value.name} />
            </div>

            <div className="section-two">
              <Link key={value.id} to={`/mobileView/${value.id}`}>
                <h1>{value.name}</h1>
              </Link>

              <p className="para">{value.about}</p>

              <div>
                <button className="book">Buy Now</button>
                <button className="book">Add to watchlist</button>
              </div>
            </div>
          </div>
        
      );
    });

    return <div>{mobile}</div>;
  }
}

export default MobileView;
