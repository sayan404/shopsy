import React, { useState } from 'react';
import './search.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  const [inputText, setInputText] = useState<string>('');
  const [click, setClick] = useState<boolean>(false);

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  return (
    <div className='searchBoxContainer'>
      <input
        type='text'
        value={inputText}
        onClick={() => setClick(true)}
        className='searchBox'
        placeholder='Search'
        onChange={inputHandler}
      />
      <AiOutlineSearch className='searchIcon' />
    </div>
  );
};

export default Search;
