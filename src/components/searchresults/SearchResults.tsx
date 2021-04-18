import React from 'react';
import { connect } from "react-redux";

//components under search results
import Linearbar from './resultcomponents/Linearbar';
import Images from './resultcomponents/Images';
import OrganizationInfo from './resultcomponents/OrganizationInfo';
import NotMember from './resultcomponents/NotMember';

//material ui
import Card from '@material-ui/core/Card';


//types
import { CauseDataType } from '../../types'


const SearchResults = (props: any) => {

  const { results,query,pagination}=props.Reducer
 
  return (<div>
    {(pagination.total!==0 &&
      <h4>Organisations matching '{query}' ({pagination.total})</h4>
    )}
  <div className="search-results">
    {results ? (
      results.map((organization: CauseDataType, i: number) => (
        <a target="/blank" href={organization.website}  key={i}>
        <Card  className="organization">
          
          {(organization.publishedAt !== null && organization.hasPassedPreliminary &&
                  <Images image={ organization.images.data[0].files.data[0]} logoimage={ organization.logo.data.files.data[0] }/>
          )}

          <OrganizationInfo data={organization}/>

          {((!organization.hasPassedPreliminary || organization.publishedAt === null) &&
              <NotMember/>
          )}

          <Linearbar stage={!organization.hasPassedPreliminary ? 33.33 : (organization.publishedAt !== null ? 100 : 66)} />

        </Card>
        </a>
      ))
    ) : null}

  </div>
  </div>)

}

const mapStateToProps = (state: CauseDataType) => ({
  ...state
});

export default connect(mapStateToProps)(SearchResults);
