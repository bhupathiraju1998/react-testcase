import React from 'react';
import { Component } from 'react';
import './style.css';

class Project extends Component {
  state = { isClick: false };

  showTestCase = () => {
    const { isClick } = this.state;
    this.setState({ isClick: !isClick });
  };

  showTestCaseDetails = () => {
    const { eachProject } = this.props;

    return (
      <div>
        <input type="checkbox" htmlFor="eachTest" />
        <label id="eachTest">{eachProject.selectedFileNewList}</label>
      </div>
    );
  };

  render() {
    const { eachProject, id } = this.props;
    const { isClick } = this.state;
    return (
      <li>
        <button className="transparent-button" onClick={this.showTestCase}>
          {eachProject.projectNameNewList}
        </button>
        {isClick && this.showTestCaseDetails()}
      </li>
    );
  }
}
export default Project;
