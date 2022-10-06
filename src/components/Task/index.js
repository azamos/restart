import React from 'react';
import '../../index.css';
import './styles.css';
import completionStatuses from '../../Constants/CompletionStatuses';

function Task(props){
        return (
            <div className='TaskExterior BorderedSolid lightBG'>
                <div className='TaskInterior Padded'>
                    <div className='GrayBG AlignTextVerticalCenter BorderedSolid'>
                        <p className='TaskNum WhiteText'>Task #{props.taskNum}:<br></br>{props.title}</p>
                    </div>
                    completion status: {props.completionStatus.percentage}%
                    <div className='ProgressBarExterior BorderedSolid'>
                        <div className={`ProgressBar ${props.completionStatus.str}`}></div>
                    </div>
                    <div className='DescriptionBox'>
                        <button className='ToggleDescriptionView'
                            onClick={()=>{props.onClickEventHandler(props.id)}}>EXPAND</button>
                        <div className={`Description WhiteBg ${props.showDescription? "BorderedSolid":""}`}>
                            {!props.showDescription?null: <p>{props.description}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Task;