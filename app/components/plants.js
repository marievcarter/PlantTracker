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
        <h1 className="title">Plant Collection</h1>
        <div className="flex-container">
          {/* <aside>
            <ConnectedAddCampus className="flex-item-add" />
          </aside> */}
          <main className="flex-container">
            <div className="flex-container-items flex-item-profiles">
              {this.props.plants.map(plant => {
                return (
                  <div key={plant.id} className="profile">
                    <NavLink to={`/plants/${plant.id}`} className="navlink">
                      <p className="link">{plant.commonName}</p>
                      <img src={plant.imageUrl} />
                    </NavLink>
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
