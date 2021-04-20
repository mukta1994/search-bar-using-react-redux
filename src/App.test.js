import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import SearchBar from './components/SearchBar';
import SearchItem from './components/searchresults/SearchItem';

it("renders correctly", ()=>{
  const { queryByTestId, queryByPlaceholderText } = render (<SearchBar/>)

  expect(queryByTestId("search-icon")).toBeTruthy();

  expect(queryByPlaceholderText("Search")).toBeTruthy();

})

describe("Input value", ()=>{
  it("changes input", ()=>{

    const {queryByPlaceholderText}= render(<SearchBar/>)

    const searchInput = queryByPlaceholderText('Search')
  
    fireEvent.change(searchInput, {target: {value: "test"}})
  
    expect(searchInput.value).toBe("test")

  })
 
})

it('render correctly search item component', () => {  
  const SearchItemComponent = (<SearchItem />);
  expect(SearchItemComponent).toMatchSnapshot();
});










