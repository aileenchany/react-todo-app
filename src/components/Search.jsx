const Search = ({ todos, searchText, setSearchText, addTodo }) => {
  /*
  -write a handleSearch function that loops through the todos
  -checks if the todo's value includes (.includes() method) the input
  */
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
