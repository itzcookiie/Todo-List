import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  //addTodo is a toggle for the input field
  //text is the value of the text in the input field
  //list of texts is a lists of saved todo's
  state = {
    addTodo: false,
    text: "",
    listOfTexts: []
  };

  //Tracks the text being typed in the input field
  storeTextInState = event => {
    this.setState({
      text: event.target.value
    });
  };

  //Saves all the todo's in state
  displayTextOnPage = () => {
    this.setState({
      listOfTexts: [...this.state.listOfTexts, this.state.text]
    });
  };

  //Delete button functionality
  removeTextFrompage = event => {
    const selectedText = event.target.parentNode.querySelector("li").innerText;
    this.setState({
      listOfTexts: this.state.listOfTexts.filter(text => text !== selectedText)
    });
  };

  //Toggle for the input field to show
  showInput = () => {
    this.setState({
      addTodo: true
    });
  };

  //Toggle for the input field to hide
  hideInput = () => {
    this.setState({
      addTodo: false
    });
  };

  render() {
    {
      /* Object destructing for all state and functions */
    }
    const { addTodo, listOfTexts } = this.state;
    const {
      removeTextFrompage,
      showInput,
      storeTextInState,
      hideInput,
      displayTextOnPage
    } = this;
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <ul>
          {/* All todo's are saved in listOfTexts in state and mapped over */}
          {listOfTexts.map((text, index) => (
            <div>
              <li key={index}> {text}</li>
              <button onClick={() => this.removeTextFrompage(event)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
        <button className="todo-button" onClick={showInput}>
          +
        </button>
        {addTodo ? (
          <div className="input-field">
            <input onChange={storeTextInState} type="text" />
            <input
              onClick={() => {
                hideInput();
                displayTextOnPage();
              }}
              type="submit"
              value="Add"
            />
          </div>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
