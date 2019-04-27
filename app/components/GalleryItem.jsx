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
        <NavLink to={`/gallery/${plant.id}`}>
          <CardMedia
            className={classes.media}
            image={plant.imageUrl}
            title={plant.commonName}
          />
        </NavLink>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <NavLink to={`/gallery/${plant.id}`}>
          <p className="link">{plant.commonName}</p>
        </NavLink>
        <div className="smallButtonContainer">
          <img
            onClick={setWaterDate}
            className="smallButton"
            src="https://images.unsplash.com/photo-1476897017502-219c9169bd6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="water droplet"
          />
          <img
            onClick={setRepotDate}
            className="smallButton"
            src="https://images.unsplash.com/photo-1537204319452-fdbd29e2ccc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="flower pot"
          />
          <img
            onClick={setFertilizeDate}
            className="smallButton"
            src="https://images.unsplash.com/photo-1487017931017-0e0d9e02bb0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="plant fertilizer"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(GalleryItem);
