import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchbarHeader, SearchForm, SearchButton, FormInput } from './Searchbar.styled'
import { FaSearch } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
   
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter search query.');
      return;
    }
     onSubmit(query);
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  return (
      <SearchbarHeader >
        <SearchForm  onSubmit={handleSubmit}>
          <SearchButton type="submit" >
            <FaSearch />
          </SearchButton>

          <FormInput
            type="text"
            value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



