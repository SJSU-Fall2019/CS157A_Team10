import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class NotFound extends Component {
  render() {
    return (
      <div className='wrapper' style={styles.content}>
        <Typography variant="h1">
          404: Opps, The page you are looking for isn’t here
      </Typography>
        <Typography variant="subtitle2">
          Try use navigation to navigate between page
      </Typography>
        {/** Image source from the template */}
        <img
          alt="Under development"
          src="/images/undraw_page_not_found_su7k.svg"
          style={styles.image}
        />
      </div>
    )
  }
}

const styles = {
  content: {
    paddingTop: 150,
    textAlign: 'center',
  },
  image:
  {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}

export default NotFound;
