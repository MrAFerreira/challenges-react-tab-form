import React from 'react';
import TabForm from './components/Tabform/TabForm';
import FormInputs from './components/FormInputs/FormInputs';
import './App.scss';

function App() {
  return (
    <div className="App">
      <TabForm className="tabform" />
      <FormInputs className="forminputs" />
    </div>
  );
}

export default App;
