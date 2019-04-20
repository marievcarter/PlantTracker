import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants, updateDate } from '../reducers/plantReducer';
import { GalleryItem } from './index.js';

class Gallery extends Component {
  componentDidMount() {
    this.props.loadPlants();
  }

  handleClick(plantId, field) {
    event.preventDefault();
    this.props.updateDate({ id: plantId, field });
  }

  render() {
    let { plants } = this.props;
    return (
      <div>
        <NavLink to={'/plants/addPlant'} />
        <div className="flex-container">
          <main className="flex-container">
            <button>+ Add Plant</button>
            <div className="flex-container-items flex-item-profiles">
              {plants.map(plant => {
                return (
                  <GalleryItem
                    key={plant.id}
                    plant={plant}
                    setWaterDate={this.handleClick.bind(
                      this,
                      plant.id,
                      'lastWatering'
                    )}
                    setRepotDate={this.handleClick.bind(
                      this,
                      plant.id,
                      'lastRepot'
                    )}
                    setFertilizeDate={this.handleClick.bind(
                      this,
                      plant.id,
                      'lastFeeding'
                    )}
                  />
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
  updateDate: updatesObj => dispatch(updateDate(updatesObj)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gallery)
);
