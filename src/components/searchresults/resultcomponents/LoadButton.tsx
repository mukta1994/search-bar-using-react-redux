import React from 'react';

//material ui
import Button from '@material-ui/core/Button';

//load more button component
const LoadButton = (props:any) => {

    const {paginationData}= props;
    const remainingResults = paginationData.total-(paginationData.currentPage*6)

    return(<div >
        {(paginationData.currentPage!==0 && paginationData.currentPage<paginationData.totalPages &&
            <Button variant="contained" color="primary"onClick={props.callback}>Load {remainingResults>6 ? 6 : remainingResults} more of {paginationData.total}
            </Button>
        )}
        </div>)
}
  
  export default (LoadButton);