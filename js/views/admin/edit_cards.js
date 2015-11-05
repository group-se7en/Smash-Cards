import React from 'react';

export default React.createClass({

  render() {
    return (
      <div>
        <h2>Add Card</h2>
        <input onChange={this.updateQuestion}></input>
        <input onChange={this.updateAnswer}></input>
        <button onClick={this.submitHandler}>Submit</button>
        <button onClick={this.cancelHandler}>Cancel</button>
      </div>
    );
  }

});

