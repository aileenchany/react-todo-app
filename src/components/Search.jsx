const Search = ({ searchText, setSearchText, addTodo }) => {
  return (
    <div className='Search'>
      <input
        className='search'
        type='search'
        placeholder='search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className='new-button' onClick={addTodo}>
        New
      </button>
    </div>
  );
};

export default Search;
