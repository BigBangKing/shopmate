import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {

  },
  imageContainer: {
    width:'100%',
    height:'100vh',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  heading: {
    position:'absolute',
    color: 'white',
    margin:'9rem',
    marginTop: '5.5rem',
    width: '50%',
    lineHeight: '6rem',
    wordSpacing: '6rem'
  },
  caption: {
    position:'absolute',
    color: 'white',
    margin:'9rem',
    marginTop: '19.5rem',
    width: '50%',
    fontSize: '2rem'

  }
};

const  SimpleContainer = (props) => {
  const { image, text, caption, classes } = props
  return (
    <div>
      <div className={classes.imageContainer} style={{backgroundImage:`url(${image})`}}>
        <Typography className={classes.heading} variant="h2">{text}</Typography>
        <Typography className={classes.caption} variant="body1">{caption}</Typography>
      </div>

    </div>
  );
}

export default  withStyles(styles)(SimpleContainer);
