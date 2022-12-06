import "./SearchBox.scss";

const SearchBox = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <form className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInput}
      />
    </form>
  );
};

export default SearchBox;
