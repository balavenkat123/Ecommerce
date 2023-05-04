import React from 'react'
import { Cart,CartMedia,CartContent,CartActions,Typography,IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';


const Product = ({product}) => {
  return (
   <cart className={classes.root}>
      <CartMedia className={classes.media} image='' title={Products.name}></CartMedia> 
      <cardContent>
        <div classNmae={classes.cardContent}>
          <Typography varient="h5" gutterBottom>
            {Product.name}
          </Typography>
          <Typography varient="h5" gutterBottom>
            {Product.price}
          </Typography>
        </div>
        <Tipograpy varient='h2' color='textSecondary'>{product.description}</Tipograpy>
      </cardContent>
      <CartActions disableSpacing className={classes.cardActions}>
        <IconButton area-label="Add to Cart">
          <AddShoppingCart/>
        </IconButton>

      </CartActions>
   </cart>
  )
}

export default Product