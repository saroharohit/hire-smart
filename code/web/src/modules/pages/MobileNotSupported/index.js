// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

// UI Imports
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// Component
const MobileNotSupported = (props) => {
  const { classes } = props
  
  return(
    <div className={classes.root}>
      {/* Meta tags */}
      <Helmet>
        <title>Mobile Not Supported - DIGIHIRE</title>
      </Helmet>

      <Typography
        variant={'h3'}
        title={'DigiHire'}
        className={classes.title}
      >
        Digi<span className={classes.titleHighlight}>Hire</span>
      </Typography>

      <Typography
        variant={'subtitle1'}
        gutterBottom
        className={classes.subTitle}
      >
        Sorry, currently this website is not supported on mobile phones. Please try in your desktop browser.
      </Typography>
    </div>
  )
}

export default withStyles(styles)(MobileNotSupported)
