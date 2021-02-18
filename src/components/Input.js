import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeForm} from '../actions/changeForm';

class Input extends Component {
  render() {
    let type = this.props.type;
    let name = this.props.name;
    let dataActionType = this.props.dataActionType;
    let font = this.props.font;
    let fontSize = this.props.fontSize;
    let height = this.props.height;
    
    //Input elements are controlled by formReducer. See notes in formReducer.js for more.
    return(
      <div className={`input ${font} ${fontSize} ${height}`}>
        {type !== 'submit' ? 
          <>
            <input className='input__input' type={type} required name={name} data-action-type={dataActionType} value={this.props.formData[this.props.name] ? this.props.formData[this.props.name] : ""} onChange={this.props.changeForm}/>
            <label className='input__label'>{name}</label>
          </>
        :
          <input className='input__submit' type='submit' value="search" />
        } 
      </div>
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
