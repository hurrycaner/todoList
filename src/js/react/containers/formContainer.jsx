import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from '../components/form';
import * as formActions from '../../redux/todo/actions/input';
import * as listActions from '../../redux/todo/actions/list';
import {getInputText} from '../../redux/todo/reducers';

class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.saveTask = this.saveTask.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.inputKeyPress = this.inputKeyPress.bind(this);
  }

  saveTask() {
    if (this.props.input !== '')
      this.props.addItem(this.props.input);
  }

  inputChange(e) {
    if (typeof e === 'string')
      this.props.changeInput(e);
    else if (e && e.target)
      this.props.changeInput(e.target.value);
  }

  inputKeyPress(event) {
    if (event.key === 'Enter')
      this.saveTask();
  }

  render() {
    return (
      <Form
        inputChange={this.inputChange}
        inputKeyPress={this.inputKeyPress}
        text={this.props.input}
        saveTask={this.saveTask}
      />
    );
  }
}

const mapStateToProps = state => ({input: getInputText(state)});
const mapDispatchToProps = dispatch => ({
  changeInput: text => dispatch(formActions.changeInput(text)),
  addItem: text => dispatch(listActions.addItem(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
