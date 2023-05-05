import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';


const Product = ({product}) => {
  const classes=useStyles();

  return (
   <card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />
      <cardContent>
        <div classNmae={classes.cartContent}>
          <Typography varient="h5" gutterBottom>
            {Product.name}
          </Typography>
          <Typography varient="h5" gutterBottom>
            {Product.price}
          </Typography>
        </div>
        <Typography varient='h2' color='textSecondary'>{product.description}</Typography>
      </cardContent>
      <CardActions disableSpacing className={classes.cartActions}>
        <IconButton area-label="Add to Cart">
          <AddShoppingCart/>
        </IconButton>

      </CardActions>
   </card>
  )
}

export default Product