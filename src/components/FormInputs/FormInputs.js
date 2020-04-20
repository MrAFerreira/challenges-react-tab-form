import React from 'react';
import { Form, Input, Button } from 'antd';
import SingleForm from '../SingleForm/SingleForm';
import './style.scss';

const FormInputs = () => {
  return (
    <div className="form-container">
      <span className="close-icon">X</span>
      <h2>1st Friend</h2>
      <SingleForm className="single-form" />
      <h2>2nd Friend</h2>
      <SingleForm className="single-form" />
    </div>
  );
};

export default FormInputs;
