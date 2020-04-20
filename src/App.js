import React from 'react';
import { Row, Col } from 'antd';
import TabForm from './components/Tabform/TabForm';
import FormInputs from './components/FormInputs/FormInputs';
import './App.scss';

function App() {
  return (
    <>
      <Row type="flex" justify="center" align="middle">
        <Col sm={24} md={12}>
          <TabForm className="tabform" />
        </Col>
        <Col sm={24} md={12}>
          <FormInputs className="forminputs" />
        </Col>
      </Row>
    </>
  );
}

export default App;
