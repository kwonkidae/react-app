import * as React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.sass';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawtalk News Admin hahahaha</h1>
        </header>
        <Editor />
      </div>
    );
  }
}

export default App;
