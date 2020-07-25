import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

import { setSearchField } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ people: users }));
  }

  render() {
    const { searchField, onSearchChange } = this.props;

    const filteredPeople = this.state.people.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (this.state.people.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f-subheadline lh-solid white ma2 pa3">People List</h1>
          <Searchbox searchField={searchField} inputChange={onSearchChange} />
          <Scroll>
            <Cardlist people={filteredPeople} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
