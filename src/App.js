import React from 'react';
import { Component } from 'react';
import { v4 } from 'uuid';
import Project from '../src/Project';
import './style.css';

class App extends Component {
  state = {
    projectName: '',
    selectedFile: '',
    submitBtn: false,
    projectList: [],
    testCaseList: [],
    updatedList: [],
  };

  getProjectName = (event) => {
    this.setState({ projectName: event.target.value });
  };

  selectedFile = (event) => {
    this.setState({ selectedFile: event.target.value });
  };

  activeButton = () => {
    const { projectName, selectedFile, updatedList } = this.state;
    const newProject = {
      id: v4(),
      projectNameNewList: projectName,
      selectedFileNewList: selectedFile,
      isClicked: false,
    };
    if (projectName && selectedFile !== '') {
      this.setState((prevState) => ({
        projectList: [...prevState.projectList, projectName],
        testCaseList: [...prevState.testCaseList, selectedFile],
        updatedList: [...prevState.updatedList, newProject],
        submitBtn: true,
        projectName: '',
        selectedFile: '',
      }));
    }
  };

  goBack = () => {
    this.setState({ submitBtn: false });
  };

  renderHomePage = () => {
    const {
      projectName,
      selectedFile,
      projectList,
      testCaseList,
      updatedList,
    } = this.state;

    return (
      <div>
        <h1>Project List</h1>
        <ul>
          {updatedList.map((eachProject) => (
            <Project eachProject={eachProject} key={eachProject.id} />
          ))}
        </ul>
        <button onClick={this.goBack}>Back</button>
      </div>
    );
  };

  renderInitialPage = () => {
    return (
      <div>
        <p>PROJECT NAME</p>
        <input
          onChange={this.getProjectName}
          placeholder=" Enter project name"
          className="input-element"
        />
        <p>TEST SCRIPTS</p>
        <input
          value=""
          onChange={this.selectedFile}
          placeholder=" select testscript"
          className="input-element"
        />
        <br />
        <button onClick={this.activeButton}>submit</button>
      </div>
    );
  };

  render() {
    const { projectName, submitBtn, updatedList } = this.state;

    return (
      <div>{submitBtn ? this.renderHomePage() : this.renderInitialPage()}</div>
    );
  }

  // const testCaseDetails = {
  //   testCase_id: 4556,
  //   request_id: 89,
  //   version: '5.8.0',
  // };

  // class App extends Component {
  //   state = {
  //     testCaseId: '',
  //     requestId: '',
  //     version: '',
  //   };

  //   convertingToJson = () => {
  //     const { newdict } = this.state;
  //     const setTestcase = localStorage.setItem(
  //       'testDetails',
  //       JSON.stringify(testCaseDetails)
  //     );

  //     const getTestCaseDetails = localStorage.getItem('testDetails');
  //     const parsedTestCaseDetails = JSON.parse(getTestCaseDetails);

  //     this.setState({
  //       testCaseId: parsedTestCaseDetails.testCase_id,
  //       requestId: parsedTestCaseDetails.request_id,
  //       version: parsedTestCaseDetails.version,
  //     });
  //   };

  //   render() {
  //     const { testCaseId, requestId, version } = this.state;
  //     console.log(testCaseId);
  //     return (
  //       <div>
  //         <button onClick={this.convertingToJson}>Test case 1 </button>

  //         <p>testId:{testCaseId}</p>
  //         <p>requestid:{requestId}</p>
  //         <p>version:{version}</p>
  //       </div>
  //     );
  //   }
  // }

  // export default App;
}

export default App;
