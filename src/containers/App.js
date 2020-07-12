import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ people: users }));
  }

  render() {
    const filteredPeople = this.state.people.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    if (this.state.people.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f-subheadline lh-solid white ma2 pa3">People List</h1>
          <Searchbox
            searchField={this.state.searchField}
            inputChange={this.onInputChange}
          />
          <Scroll>
            <Cardlist people={filteredPeople} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
