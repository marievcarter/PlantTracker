import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants } from '../reducers/plantReducer.js';

class Plants extends Component {
  componentDidMount() {
    this.props.loadPlants();
  }

  render() {
    return (
      <div>
        <h1 className="title">All Plants</h1>
        <div className="flex-container">
          {/* <aside>
            <ConnectedAddCampus className="flex-item-add" />
          </aside> */}
          <main className="flex-container">
            <div className="flex-container-items flex-item-profiles">
              {this.props.plants.map(plant => {
                return (
                  <div key={plant.id} className="profile">
                    <p>{plant.commonName}</p>
                    <img src={plant.imageUrl} />
                    {/* <NavLink
                      key={plant.id}
                      to={`/plants/${plant.id}`}
                      className="navlink"
                    >
                      <h3 className="link">{plant.name}</h3>
                    </NavLink> */}
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plants: state.plants.plants,
});

const mapDispatchToProps = dispatch => ({
  loadPlants: () => dispatch(fetchPlants()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Plants)
);
