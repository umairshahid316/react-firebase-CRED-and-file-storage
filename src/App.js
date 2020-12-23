import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import UploadImage from "./components/UploadImage";
import firebase from './firebase';
import { useEffect } from 'react';


function App() {
  useEffect(() => {

    firebase.analytics().logEvent("homepage_visited")
  });
  return (
    <div className="App">

      <h1>Todo</h1>
      <Form />
      <TodoList />
      <UploadImage />
    </div>
  );
}

export default App;
