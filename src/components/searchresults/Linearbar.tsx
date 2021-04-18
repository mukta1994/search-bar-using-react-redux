import React from 'react';

//material ui
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles(() => ({
  root: {
    borderRadius: 5,
    position: 'absolute',
    bottom: '0',
    right: '0',
    left: '0',
    height: '4px !important'
  },
  colorPrimary: {
    backgroundColor: 'grey',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#f50057',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }

});


const Linearbar= (props:any) => {

const classes = useStyles();

  return (
          <div className={classes.root}>
            <BorderLinearProgress variant="determinate"
              value={props.stage} />
          </div>
       )
}


export default Linearbar;
