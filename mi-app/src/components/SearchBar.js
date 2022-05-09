import React, {useState} from 'react'
import s from './SearchBar.module.css'
export default function SearchBar({addTask}){
    const [input, setInput] = useState("")

    return(
        <div className={s.SearchBar}>
                <input className={s.input} type="text" placeholder='Task' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className={s.btn} onClick={() => addTask(input)}>+</button>
        </div>
    )
}