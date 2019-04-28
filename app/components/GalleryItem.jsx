import '../../tempStyles.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import { shadows } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
// import muli from 'typeface-muli';

const styles = {
  card: {
    maxWidth: 400,
    borderRadius: 1,
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, .2)',
  },
  media: {
    height: 150,
  },
  cardContent: {
    width: 200,
  },
  title: {
    textDecoration: 'none',
    color: '#3c7656',
    margin: '0 0 10px 0',
    fontsize: 20,
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
        <NavLink className={classes.title} to={`/gallery/${plant.id}`}>
          <p className={classes.title}>{plant.commonName}</p>
        </NavLink>
        <div>
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
