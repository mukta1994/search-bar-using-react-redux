import React from 'react';
import { connect } from "react-redux";

//material ui
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


//types
import { CauseDataType, CauseCategoryType } from '../types'

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    tagline: {
        fontSize:'14px' 
    },
    organizationHeading: {
        color:'#d53652'
    },
    organizationName: {
        fontWeight:'bold'
    },
    organizationInfo: {
        marginLeft:'0.5rem',
        textAlign: 'left',
        fontSize:'14px' 
    },
    categories: {
        fontSize:'12px',
        color:'gray'
    },
    orgImage: {
        objectFit: 'cover',
        width: '100%',
        height: '200px',
        
    },
    images: {
        position: 'relative',
      },
      overlay: {
      position: 'absolute',
      left: '1rem',
      top:'1rem',
      width: '2rem',
      height:'2rem',
      opacity:'1',
      padding: '1rem',
      borderRadius:'50%',
      border: '1px solid white',
      backgroundColor: 'white'
      }
    
  });



const SearchResults = (props:any) => {

    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return(<div className="search-results">
        {props.Reducer.results ? (
            props.Reducer.results.map((organization:CauseDataType, i:number) => (
              <Card key={i}>
                  <div className={classes.images}>
                  <img src={organization.images.data[0].files.data[0].url} alt="img" className={classes.orgImage}></img>
                  <div className={classes.overlay} ><img src={organization.logo.data.files.data[0].url} style={{width:"100%"}}/></div>
                  </div>
                  <div className={classes.organizationInfo}>
                      <h4 className={classes.organizationHeading}>organizaion</h4>
                      <p className={classes.organizationName}>{organization.name}</p>
                      <p className={classes.tagline}>{organization.tagline}</p>
                      
                      <p className={classes.categories}>
                      {organization.categories && organization.categories.data.map((category:CauseCategoryType, i:number) => (
                          <span>
                              {bull} {category.name}
                          </span>

                      ))}
                      </p>
                  </div>
                
              </Card>
            ))
        ) : null}
        
        </div>)
   
}

const mapStateToProps = (state:CauseDataType) => ({
    ...state
  });
  
  export default connect(mapStateToProps)(SearchResults);
