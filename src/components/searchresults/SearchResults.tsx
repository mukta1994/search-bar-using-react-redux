import React from 'react';
import { connect } from "react-redux";

//child component of SearchResults components
import SearchItem from './SearchItem';

//types
import { CauseDataType } from '../../types'


const SearchResults = (props: any) => {

  const { results, query, pagination } = props.Reducer

  return (<div>
    {(pagination.total !== 0 &&
      <h4>Organisations matching '{query}' ({pagination.total})</h4>
    )}

    <div className="search-results">
      {results ? (
        results.map((organization: CauseDataType, i: number) => (
          <SearchItem organizationData={organization} key={i}/>
        ))
      ) : null}

    </div>
  </div>)

}

const mapStateToProps = (state: CauseDataType) => ({
  ...state
});

export default connect(mapStateToProps)(SearchResults);
