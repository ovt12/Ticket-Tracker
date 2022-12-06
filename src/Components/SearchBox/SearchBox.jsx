import "./SearchBox.scss";

const SearchBox = (props) => {
  const { role, handleInput, searchTerm } = props;

  return (
    <form className="search-box">
      <input
        type="text"
        role={role}
        value={searchTerm}
        onChange={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
