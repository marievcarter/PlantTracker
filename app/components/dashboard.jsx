import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = () => {
  return (
    <div className="flex-container-items">
      <div className="profile">
        <h3>Upcoming Events</h3>
      </div>
      <div className="profile">
        <h3>Plant Status</h3>
      </div>
    </div>
  );
};

export default withRouter(connect()(Dashboard));
