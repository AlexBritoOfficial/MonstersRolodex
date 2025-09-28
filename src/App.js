import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });

    console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    const searchField =
      event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name
          .toLocaleLowerCase()
          .includes(searchField);
      }
    );

    return (
      <div className="App">
        <SearchBox
          className={"serach-box"}
          onChangeHandler={onSearchChange}
          placeholder={"Search Monsters"}
        />
        <CardList
          monsters={filteredMonsters}
          placeholder={"Search Monsters"}
          className={"search"}
        />
      </div>
    );
  }
}

export default App;
