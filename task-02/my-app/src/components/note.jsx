import React from 'react';
import Button from './button';

const Note = ({url}) => (
  <div className="item">
    <div className="item__image">
      <img src={url} alt="image of icon"/>
    </div>
    <form action="#">
    <Button label="delete"/>
    <Button label="edit"/>
    </form>
  </div>
);

export default Note;