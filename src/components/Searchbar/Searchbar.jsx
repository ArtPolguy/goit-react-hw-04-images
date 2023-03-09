import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...state });
    setState({ search: '' });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ [name]: value });
  };
  const { search } = state;

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormBtn}>
          <AiOutlineSearch className={css.btnLabel} />
        </button>

        <input
          className={css.SearchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={search}
          required
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
