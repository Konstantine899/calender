// containers/FormContainer/FormContainer.js
import React from 'react';
import { Component } from 'react';

import './FormContainer.scss';

import CheckBox from '../../components/Form/CheckBox';
import Input from '../../components/Form/Input';
import TextArea from '../../components/Form/TextArea';
import Select from '../../components/Form/Select';
import Button from '../../components/Form/Button';

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <CheckBox />
        <Input />
        <TextArea />
        <Select />
        <Button />
      </form>
    );
  }
}
