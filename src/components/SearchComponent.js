import algoliasearch from 'algoliasearch/lite';
import React, {  } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'UORHJCOG49',
  '74fb98e8049e4753ce230f010774b425'
);

export default function SearchComponent() {
    return (
      <InstantSearch indexName="space-centers" searchClient={searchClient}>
          <SearchBox />
          <Hits hitComponent={Hit} />
      </InstantSearch>
    );
}

function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}

