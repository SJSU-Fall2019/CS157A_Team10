import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from '../../../../components';

const styles = {
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: 15,
  },
  exportButton: {
    marginRight: 15,
  },
  searchInput: {
    marginRight: 15,
  }
}

class ProductsToolbar extends React.Component {
  state = {
    searchValue: '',
  }

  render() {
    return (
      <div style ={styles.root}>
        <div style= {styles.row}>
          <span style={styles.spacer}/>
          <Button style={styles.importButton}>Import</Button>
          <Button style={styles.exportButton}>Export</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={()=>
            {
               alert('You will be direct to project creation screen')
               // Handles add project event
               // Navigate to add project screen
            }}
          >
            Add Project
          </Button>
        </div>
        <div style={styles.row}>
          <SearchInput
            style={styles.searchInput}
            placeholder="Search project"
            
          />
        </div>
      </div >
    )}
}

export default ProductsToolbar;
