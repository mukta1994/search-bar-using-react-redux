
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { CauseDataType, CauseCategoryType } from '../../../types'

export interface organizationInfo {
    data : CauseDataType,
} 

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    tagline: {
      fontSize: '14px'
    },
    organizationHeading: {
      color: '#f50057'
    },
    organizationName: {
      fontWeight: 'bold'
    },
    organizationInfo: {
      marginLeft: '0.5rem',
      textAlign: 'left',
      fontSize: '14px',
      marginBottom:'1rem'
    },
    categories: {
      fontSize: '12px',
      color: 'gray'
    }
  }); 
const OrganizationInfo = (props: organizationInfo) => {
    const classes = useStyles();
   const {data}=props;
    const bull = <span className={classes.bullet}>•</span>;
  
  
    return (<div className={classes.organizationInfo}>
              <h4 className={classes.organizationHeading}>organizaion</h4>
              <p className={classes.organizationName}>{data.name}</p>
              <p className={classes.tagline}>{data.tagline}</p>
              <p className={classes.categories}>
                {data.categories && data.categories.data.map((category: CauseCategoryType, i: number) => (
                  <span>
                    {bull} {category.name}
                  </span>
                ))}
              </p>
            </div>
      )
  
  }

  export default OrganizationInfo;
  