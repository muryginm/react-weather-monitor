import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.targe.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input
          placeholder='Please enter a search term'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondaty'>Submit</button>
        </span>
      </form>
    );
  }
};
