import React from 'react';
import ReactDOM from 'react-dom';
import './Container.css';
import './sayHello.css';

const user = {
    firstName: "Viktor",
    lastName: "Ostapenko"
}

ReactDOM.render(
    <div className="Container">{sayHello(user)}</div>, document.querySelector('#root')
)

function sayHello(user) {
    if(user) {
        return <h1 className="sayHellow">Hellow, {user.firstName} {user.lastName}!!!</h1>
    }
    return <h1>Hello, Strange!</h1>
}