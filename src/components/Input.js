import React, {Component} from 'react';
import GridItem from './GridItem';
import {connect} from 'react-redux';
import {changeForm} from '../actions/changeForm';

class Input extends Component {
  render() {
    return(
      <GridItem className="input">
        <input className="input__input" type={this.props.type} name={this.props.name} data-action-type={this.props.dataActionType} value={this.props.formData[this.props.name] ? this.props.formData[this.props.name] : ""} onChange={this.props.changeForm}/>
        <label className="input__label"> </label>
      </GridItem>
    )
  }
};

function mapStateToProps(state) {
  return {
    ...state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeForm: (e) => {
      e.preventDefault();
      dispatch(changeForm(e))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
