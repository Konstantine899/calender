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
    this.state = {
      newFormValue: {
        Q1: '',
        // Q2: '',
        // T1: '',
        // T2: '',
        // V1: '',
        // V2: '',
        // M1: '',
        // M2: '',
        // work_device: '',
        // work_device_error: '',
        // exampleFormControlTextarea1: '',
      },
    };

    // this.handleQ1 = this.handleQ1.bind(this);

    this.handleInput = this.handleInput.bind(this);
    this.handleQ1 = this.handleQ1.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleQ1(e) {
    let value = e.target.value;
    this.setState((prevState) => ({
      newFormValue: { ...prevState.newFormValue, name: value },
    }));
    () => this.state.newFormValue;
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => {
        return {
          newFormValue: {
            ...prevState.newFormValue,
            [name]: value,
          },
        };
      },
      () => console.log(this.state.newFormValue)
    );
  }

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    e.preventDefault();
    this.setState({
      newFormValue: {
        Q1: '',
        Q2: '',
        T1: '',
        T2: '',
        V1: '',
        V2: '',
        M1: '',
        M2: '',
        work_device: '',
        work_device_error: '',
        exampleFormControlTextarea1: '',
      },
    });
  }

  render() {
    return (
      <form>
        <CheckBox />
        <Input
          InputType={'number'}
          name="Q1"
          title={'Q1'}
          value={this.state.newFormValue.Q1}
          placeholder={'Введите Q1'}
          handleChange={this.handleInput}
        />
        <TextArea />
        <Select />
        <Button />
      </form>
    );
  }
}
