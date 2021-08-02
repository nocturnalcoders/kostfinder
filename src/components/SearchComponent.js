import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export const SearchComponent = props => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{margin:10}}
    />
  );
};

export default SearchComponent;