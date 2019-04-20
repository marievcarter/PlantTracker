import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryItem = props => {
  let { plant, setWaterDate, setRepotDate, setFertilizeDate } = props;
  return (
    <div key={plant.id} className="profile">
      <NavLink to={`/plants/${plant.id}`} className="navlink">
        <p className="link">{plant.commonName}</p>
        <img src={plant.imageUrl} />
      </NavLink>
      <div className="smallButtonContainer">
        <img
          onClick={setWaterDate}
          className="smallButton"
          src="https://banner2.kisspng.com/20180224/ivw/kisspng-water-drop-clip-art-fine-water-droplets-5a912d7285c734.796749691519463794548.jpg"
          alt="water droplet"
        />
        <img
          onClick={setRepotDate}
          className="smallButton"
          src="https://images.vexels.com/media/users/3/127671/isolated/preview/d3bbccb04209d6b020530973e53c56bc-flat-flower-tub-icon-by-vexels.png"
          alt="flower pot"
        />
        <img
          onClick={setFertilizeDate}
          className="smallButton"
          src="https://cdn0.iconfinder.com/data/icons/nature-3-6/52/130-512.png"
          alt="plant fertilizer"
        />
      </div>
    </div>
  );
};

export default GalleryItem;
