import React from 'react';
import './components/TasksMaster';
import TasksMaster from './components/TasksMaster';
import Constants from './Constants';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
          <TasksMaster tasks={Constants.fakeTasks}></TasksMaster>
      </div>
    );
  }
}

export default App;
