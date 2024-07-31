import React from 'react'
import './AddTask.css'
import { useRecoilValue } from 'recoil'
import { addTitleState, addTitleStateLength } from '../states/addTitleState'

const AddTask = () => {

    const addTitle = useRecoilValue(addTitleState)
    const addTitleLength = useRecoilValue(addTitleStateLength)

    return (
        <div className='taskField'>
            <div>{addTitleLength}個タスクがあります</div>
            <div>
                <ul>
                    {/* <li>初めてのタスク</li> */}
                    {addTitle.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AddTask