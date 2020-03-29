import React, { Component } from "react";
import NavBar from "./navbar";
import Counters from "./counters";

class Main extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 33 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counterToIncrement => {
    const clonedCounters = [...this.state.counters];
    const index = clonedCounters.indexOf(counterToIncrement);
    clonedCounters[index] = { ...counterToIncrement };
    clonedCounters[index].value++;
    this.setState({ counters: clonedCounters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(e => e.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default Main;