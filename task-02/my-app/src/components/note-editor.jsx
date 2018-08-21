import React, {Component} from 'react';
import './css/note-editor.css';
import Button from './button';

export default class NoteEditor extends Component{
    state = {
        inputValue: 'ddddddd',
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value 
        })
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({
          inputValue: '',
      });
    }

    render() {
        const {inputValue} = this.state;
        return (
            <form className="NoteEditor" onSubmit={this.handleSubmit}>
            <h1>{inputValue}</h1>
              <textarea
                className="NoteEditor-input"
                rows="5"
                value={inputValue}
                onChange={this.handleChange}
              />
              <Button  label="Add" />
            </form>
        );
    }
}