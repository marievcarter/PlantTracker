import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlants, updateDate } from '../reducers/plantReducer';

class Plants extends Component {
  componentDidMount() {
    this.props.loadPlants();
  }

  handleClick(plantId, field) {
    event.preventDefault();
    this.props.updateDate({ id: plantId, field });
  }

  render() {
    return (
      <div>
        <NavLink to={'/plants/addPlant'}>
          <button>+ Add Plant</button>
        </NavLink>
        <div className="flex-container">
          <main className="flex-container">
            <div className="flex-container-items flex-item-profiles">
              {this.props.plants.map(plant => {
                return (
                  <div key={plant.id} className="profile">
                    <NavLink to={`/plants/${plant.id}`} className="navlink">
                      <p className="link">{plant.commonName}</p>
                      <img src={plant.imageUrl} />
                    </NavLink>
                    <div className="smallButtonContainer">
                      <img
                        onClick={this.handleClick.bind(
                          this,
                          plant.id,
                          'lastWatering'
                        )}
                        className="smallButton"
                        src="https://banner2.kisspng.com/20180224/ivw/kisspng-water-drop-clip-art-fine-water-droplets-5a912d7285c734.796749691519463794548.jpg"
                        alt="water droplet"
                      />
                      <img
                        onClick={this.handleClick.bind(
                          this,
                          plant.id,
                          'lastRepot'
                        )}
                        className="smallButton"
                        src="https://images.vexels.com/media/users/3/127671/isolated/preview/d3bbccb04209d6b020530973e53c56bc-flat-flower-tub-icon-by-vexels.png"
                        alt="flower pot"
                      />
                      <img
                        onClick={this.handleClick.bind(
                          this,
                          plant.id,
                          'lastFeeding'
                        )}
                        className="smallButton"
                        src="https://cdn0.iconfinder.com/data/icons/nature-3-6/52/130-512.png"
                        alt="plant fertilizer"
                      />
                    </div>
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
  updateDate: updatesObj => dispatch(updateDate(updatesObj)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Plants)
);
