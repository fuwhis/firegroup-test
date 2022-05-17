import './App.css'
import React from 'react';
import Form from './components/Form/index.js';
import { Card } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card title="User Information">
          <Form />
        </Card>
      </header>
    </div>
  );
}

export default App;
