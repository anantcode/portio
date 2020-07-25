import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredPeople = robots.filter((item) => {
      return item.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
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
