import React from 'react';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.id = props.id;
        this.taskNum = props.taskNum;
        this.title = props.title;
        this.description = props.description;
        this.showDescription = false;
        this.onClickEventHandler = props.onClickEventHandler;
    }
    render(){
        return (
            <div className='TaskExterior'>
                <div className='TaskInterior'>
                    <p className='TaskNum'>{this.taskNum}</p>
                    <p className='Title'>{this.title}</p>
                    <div className='ProgressBarExterior'>
                        <div className='ProgressBar'></div>
                    </div>
                    <div className='DescriptionBox'>
                        <button className='ToggleDescriptionView'
                            onClick={()=>{this.onClickEventHandler(this.id)}}>EXPAND</button>
                        <div className='Description'>
                            {this.showDescription? <p>{this.description}</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;