import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const {
      className,
      onChangeHandler,
      placeholder,
    } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    );
  }
}

export default SearchBox;
