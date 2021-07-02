import { type } from 'os';
import React from 'react';
import logo from './logo.svg';

type ButtonProps = {
  children: string
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Xapuleta</Button>
    </div>
  );
}

export default App;

function Button(props: ButtonProps) {
  return <button>{props.children}</button>
}