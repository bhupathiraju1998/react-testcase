import React from 'react';
import { Component } from 'react';
import './style.css';

class Project extends Component {
  state = { isClick: false, isChecked: false };

  showTestCase = () => {
    const { isClick } = this.state;
    this.setState({ isClick: !isClick });
  };

  handleChange = () => {
    const { isChecked } = this.state;
    this.setState((prevstate) => ({
      isChecked: !prevstate.isChecked,
    }));
  };

  showTestCaseDetails = (isChecked) => {
    const { eachProject } = this.props;
    const checked = isChecked ? 'checked' : '';

    return (
      <div>
        <input type="checkbox" id="eachTest" checked={checked} />
        <label htmlFor="eachTest" onClick={this.handleChange}>
          {eachProject.selectedFileNewList}
        </label>
      </div>
    );
  };

  render() {
    const { eachProject, key } = this.props;
    const { isClick, isChecked } = this.state;
    return (
      <li>
        <button className="transparent-button" onClick={this.showTestCase}>
          {eachProject.projectNameNewList}
        </button>
        {isClick && this.showTestCaseDetails(isChecked)}
      </li>
    );
  }
}
export default Project;
