import algoliasearch from 'algoliasearch/lite';
import React, {  } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from 'react-instantsearch-dom';
import {
  SearchContainer,
  SearchPanel
} from './styles/SearchBar.styled';

const searchClient = algoliasearch(
  'UORHJCOG49',
  '74fb98e8049e4753ce230f010774b425'
);

export default function SearchBar() {
    return (
      <SearchContainer>
        <InstantSearch indexName="space-centers" searchClient={searchClient}>
          <SearchBox/>
          <SearchPanel>
            <Hits hitComponent={Hit} />
          </SearchPanel>
        </InstantSearch>
      </SearchContainer>
    );
}

function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.name} />
      </div>
      {/* <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div> */}
    </div>
  );
}

