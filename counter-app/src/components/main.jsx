import React, { Component } from "react";
import NavBar from "./navbar";
import Counters from "./counters";
import { connect } from 'react-redux';

class Main extends Component {
  handleIncrement = counterToIncrement => {
    this.props.handleIncrement(counterToIncrement.id);
  };
  handleDelete = counterId => {
    this.props.handleDelete(counterId);
  };
  handleReset = () => {
    this.props.handleReset();
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.props.counters.filter(e => e.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.props.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { counters: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: (id) => {
      dispatch({
        type: "handleIncrement",
        payload: {id: id}
      })
    },
    handleDelete: (id) => {
      dispatch({
        type: "handleDelete",
        payload: {id: id}
      })
    },
    handleReset: () => {
      dispatch({
        type: "handleReset",
        payload: {}
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
