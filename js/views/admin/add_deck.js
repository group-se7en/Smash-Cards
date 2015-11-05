import React from 'react';

export default React.createClass({

  submitHandler() {
    this.props.onSubmitClick();
  },

  render() {
    return (
      <div>
        <h2></h2>
        <input></input>
        <button onClick={this.submitHandler}>Testing</button>
      </div>
    );
  }

});

