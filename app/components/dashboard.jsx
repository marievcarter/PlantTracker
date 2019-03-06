import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div>
        <img
          className="medium-button"
          src="https://png.pngtree.com/element_origin_min_pic/16/12/28/dc4bbaae38535e735ae8c19a730d539c.jpg"
        />
        <img
          className="medium-button"
          src="https://ya-webdesign.com/images250_/succulent-svg-potted-cactus-2.png"
        />
        <div className="flex-container-items">
          <div className="profile">
            <h3>Upcoming Reminders</h3>
            <span>
              <b>January 4, 2019</b>
            </span>
            <ul>
              <li>Water ficus bonsai</li>
              <li>Repot ponytail palm</li>
            </ul>
            <span>
              <b>January 8, 2019</b>
            </span>
            <ul>
              <li>Fertilize domino cactus</li>
              <li>Water aloe vera</li>
              <li>Water snake plant</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Profile));
