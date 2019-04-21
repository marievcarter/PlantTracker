import '../../tempStyles.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 150,
  },
  cardContent: {
    width: 200,
  },
};

const GalleryItem = props => {
  let { plant, setWaterDate, setRepotDate, setFertilizeDate, classes } = props;
  return (
    <Card key={plant.id} className={classes.card}>
      <CardActionArea>
        <NavLink to={`/plants/${plant.id}`}>
          <CardMedia
            className={classes.media}
            image={plant.imageUrl}
            title={plant.commonName}
          />
        </NavLink>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <NavLink to={`/plants/${plant.id}`}>
          <p className="link">{plant.commonName}</p>
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
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(GalleryItem);
