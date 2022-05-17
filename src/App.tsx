import React, {useContext, useState} from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Map} from "./components/Map/Map";
import {SearchContext} from './context/SearchContex';

export const App = () => {
  const [search,setSearch] = useState('');
  return <>
    <SearchContext.Provider value={{
      search,
      setSearch
    }}>
      <Header></Header>
      <Map></Map>
    </SearchContext.Provider>
  </>
};

