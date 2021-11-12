// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// UI Imports
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import params from '../../../setup/config/params'
import routes from '../../../setup/routes'

// Component
class Footer extends PureComponent {
  render() {
    const { classes } = this.props

    return (
      <footer className={classes.root}>
        
      </footer>
    )
  }
}

// Component Properties
Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
