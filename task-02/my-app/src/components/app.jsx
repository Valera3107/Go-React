import React, {Component} from 'react';
import Note from './note';
import NoteEditor from './note-editor';
import NotesGrid from './notes-grid';

export default class App extends Component {
  state = {
    notes: [],
  }


  render() {
    const {notes} = this.state;

    return (
      <div>
        <NoteEditor />
        <Note url='http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png'/>
        <NotesGrid notes={notes}></NotesGrid>
      </div>
    )
  }
}