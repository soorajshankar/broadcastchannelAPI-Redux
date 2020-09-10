import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { actions } from "./redux/store";

class App extends React.Component {
  componentDidMount() {
    var BC = new BroadcastChannel("gator_channel");
    BC.onmessage = (msg) => {
      console.log(msg);
      this.props.dispatch({ ...msg.data, BCMODE: true });
    };

    this.props.dispatch({ type: actions.setBC, BC });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{JSON.stringify(this.props.n)}</h1>
          <ul>
            <li>TT</li>
            <li>TT</li>
            <li>TT</li>
          </ul>
          <button
            onClick={() =>
              this.props.dispatch({ type: actions.increment, test: ">>>" })
            }
          >
            decrement
          </button>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(App);
