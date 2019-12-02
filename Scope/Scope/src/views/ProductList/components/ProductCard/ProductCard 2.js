import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router'


const styles = {
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  numberPartyStyle:
  {
    alignItems: 'center',
  },
}


class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    project: [],
  }

  render() {
    return (
      <div>
        {/**
           Recieve Props from the product list and use props history to navigate
           // replace dashboard with project details page and passing project to it
           */}
        <Card
          style={styles.root}
          style={{ height: 270, width: 300 }}
          onClick={() => {
            this.props.props.history.push({
              pathname: '/dashboard',
              state: { project: this.state.product },
            })
          }}
        >
          <CardContent>
            <Typography
              align="left"
              gutterBottom
              variant="h4"
            >
              {this.props.product.project_title}
            </Typography>

            <div
              style={styles.imageContainer}>
              <img
                alt="Product"
                style={styles.image}
                src={"/images/products/product_3.png"}
              />
            </div>
            <Typography
              align="left"
              variant="body1"
            >
              {this.props.product.project_description.slice(0, 180)}
            </Typography>
          </CardContent>
          <Divider />
          <div style={{ alignSelf: 'flex-end' }}>
            <CardActions>
              <Grid
                container
                justify="space-between"
              >
                <Grid
                  style={styles.statsItem}
                  item
                >
                </Grid>
                <Grid
                  item
                >
                  <Typography
                    display="inline"
                    variant="body2"
                    style={styles.numberPartyStyle}
                  >
                    Contributors: {this.props.product.member_size} 3
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </div>
        </Card>
      </div >
    )
  }
}


export default ProductCard




  // const ProductCard = props => {
  //   const { className, product, ...rest } = props;

  //   const classes = useStyles();

  //   return (
  //     <Card
  //       {...rest}
  //       className={clsx(classes.root, className)}
  //       style={{ height: 270, width: 300 }}
  //     >
  //       <CardContent>
  //         <Typography
  //           align="left"
  //           gutterBottom
  //           variant="h4"
  //         >
  //           {product.project_title}
  //         </Typography>

  //         <div className={classes.imageContainer}>
  //           <img
  //             alt="Product"
  //             className={classes.image}
  //             src={product.imageUrl}
  //           />
  //         </div>
  //         <Typography
  //           align="left"
  //           variant="body1"
  //         >
  //           {product.project_description}
  //         </Typography>
  //       </CardContent>
  //       <Divider />
  //       <CardActions>
  //         <Grid
  //           container
  //           justify="space-between"
  //         >
  //           <Grid
  //             className={classes.statsItem}
  //             item
  //           >
  //             <AccessTimeIcon className={classes.statsIcon} />
  //             <Typography
  //               display="inline"
  //               variant="body2"
  //             >
  //               Updated 2hr ago
  //           </Typography>
  //           </Grid>
  //           <Grid
  //             className={classes.statsItem}
  //             item
  //           >
  //             <GetAppIcon className={classes.statsIcon} />
  //             <Typography
  //               display="inline"
  //               variant="body2"
  //             >
  //               Number in Party: {product.member_size}
  //             </Typography>
  //           </Grid>
  //         </Grid>
  //       </CardActions>
  //     </Card>
  //   );
  // };

  // ProductCard.propTypes = {
  //   className: PropTypes.string,
  //   product: PropTypes.object.isRequired
  // };

