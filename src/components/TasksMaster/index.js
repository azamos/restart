import React from "react";
import Task from '../Task';
import '../../index.css';


/*Will recieve each task's info via props from parent, App,
    who in turn will request the info as a json from the server.
        Will generate a Task component for each one with the relevant info.*/
class TasksMaster extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'tasks':props.tasks
        }
        /*tasks props expects an object/dict with the keys being the IDs, and values comprised of the rest of the info */
    }
    toggleDescriptionEventHandler(taskID){
        const newState = {...this.state};
        newState['tasks'][taskID].showDescription = !this.state['tasks'][taskID].showDescription;
        this.setState(newState);
    }
    render(){
        return(
            <div className="Flex Row PaddedBig">
                {
                    Object.keys(this.state['tasks']).map((id)=>
                            <Task
                                id = {id} 
                                key={id}
                                showDescription = {this.state.tasks[id].showDescription}
                                taskNum = {this.state.tasks[id].taskNum} 
                                title = {this.state.tasks[id].title} 
                                description = {this.state.tasks[id].description} 
                                onClickEventHandler = {this.toggleDescriptionEventHandler.bind(this)}>
                            </Task>)
                }
            </div>);
    }
}

export default TasksMaster;