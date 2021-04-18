import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';


//types
import { ImageFileType } from '../../../types'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
    top: '1rem',
    width: '2rem',
    height: '2rem',
    opacity: '1',
    padding: '1rem',
    borderRadius: '50%',
    border: '1px solid white',
    backgroundColor: 'white'
  }

});

export interface Image {
    image : ImageFileType,
    logoimage: ImageFileType
}

const Images:React.FC<Image> = (props: Image) => {
    const { image ,logoimage }= props

  const classes = useStyles();

  return (
      <div className={classes.images}>
            <img src={image.url} alt="img" className={classes.orgImage}></img>
            <div className={classes.overlay} ><img src={logoimage.url} style={{ width: "100%" }} alt="logo"/></div>
          </div>
  )

}


export default Images;
