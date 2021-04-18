import React from 'react';
import './App.css';
import { connect } from 'react-redux';

//components
import SearchBar from './components/SearchBar'
import SearchResults from './components/searchresults/SearchResults'

//api
import { getSearchResults } from './api/services';

//actions
import {getResults, getResultsSuccess, incCounter, searchInput } from './actions/actions';

//types
import { CauseDataType } from './types'

//material ui
import CircularProgress from '@material-ui/core/CircularProgress';


function App(props:any) {

  //start search when enter is clicked
  const onKeyUp=(e:any)=> {
    if (e.charCode === 13) {
      handleInputChange();
    }
  }

  const handleInputChange = async() => {
    if(props.Reducer.query!==''){
      props.onLoadResultsClick();

      const searchResults= await getSearchResults(props.Reducer.query,props.Reducer.counter);
      console.log(searchResults)
      props.onLoadSearchResultsOnComplete(searchResults) 
    }
   
  };

  const handleInput=(e:any)=>{
    props.onChangeInput(e.target.value)
  }

  const clearInput=()=>{
    props.onChangeInput('');
    props.onLoadSearchResultsOnComplete([]) 
  }


  return (
    <div className="App">
         <SearchBar callback={()=>handleInputChange()} 
                    onInput={(e:any) => handleInput(e)}
                    clearSearchInput={() => clearInput()}
                    onKeyPress={onKeyUp}
                    val={props.Reducer.query}/>

        <SearchResults></SearchResults>

        {props.Reducer.isLoading ?<CircularProgress /> : null}
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  ...state
});

// { actions: bindActionCreators(eventPassed, dispatch) }

const mapDispatchToProps = (dispatch:any) => {
  return {
    onLoadResultsClick: () => {
      dispatch(getResults());
    },
    onLoadSearchResultsOnComplete: (results:CauseDataType) => {
      dispatch(getResultsSuccess(results));
    },
    onChangeInput:(query:any)=>{
      dispatch(searchInput(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);