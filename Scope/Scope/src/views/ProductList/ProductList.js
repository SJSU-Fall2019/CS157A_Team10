import React from 'react';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ProductsToolbar, ProductCard } from './components';
import mockData from './data';
import { Redirect } from 'react-router';

const styles = {
  root: {
    padding: 10,
  },
  content: {
    marginTop: 20,
  },
  pagination: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}

/**
 * Represent a Project List component
 */
class ProductList extends React.Component {
  state = {
    product: [],
  }

  async fetchProject() {
    await fetch('http://localhost:8001/user/project',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          auth_token: sessionStorage.getItem('auth_token')
        },

      }).then((response) => {
        response.json()
          .then((responseJson) => {
            this.setState(
              {
                product: responseJson
              }
            )
          })
      })
      .catch((error) => {
        throw error
      });
  }

  componentDidMount() {
    this.fetchProject()
  }

  render() {
    return (
      <div style={styles.root}>
        <ProductsToolbar />
        <div style={styles.content}>
          <Grid
            container
            spacing={3}
          >
            {this.state.product.map(product => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} props ={this.props}/>
              </Grid>
            ))}
          </Grid>
        </div>
        {/* <div style={styles.pagination}>
          <Typography variant="caption">1-6 of 20</Typography>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div> */}
      </div>

    )
  }
}

export default ProductList;
